import { message } from 'antd';
import * as THREE from 'three';
import FontManager from '../font/font-manager';
import AnimatorBase from './animator/animator-base';
import { AppEventType } from './../../core/event-manager';
import RotatedAnimator from './animator/rotated-animator';
import { App } from './../../../layouts/app/app-interface';
import ShowTextAnimator from './animator/show-text-animator';
import { BasicTreeNode } from './../../tree/node/basic-node';
import BasicNodeViewobject from './node/basic-node-viewobject';
import { BasicBinaryTree } from './../../tree/basic-binary-tree';
import VisitedNodeAnimator from './animator/visited-node-animator';
import { GlobalNodeDirtyFlows, NodeDirtyType } from './global-node-dirty-flows';
import ChangeParentAnimator from './animator/change-parent';


export class BinaryTreeViewObject extends THREE.Object3D {
  public tree: BasicBinaryTree;

  protected _app: App;
  protected _nodeViewObjectMap: Map<number, BasicNodeViewobject> = new Map();

  protected _enterAnimating: boolean = false;
  protected _currentAcitiveAnimators?: Set<number>;
  protected _animatorFlows: AnimatorBase[][] = [];


  constructor(app: App, tree: BasicBinaryTree) {
    super();
    this._app = app;
    this.tree = tree;
    tree.levelOrderTraverse((node: BasicTreeNode) => {
      this.addNode(node);
      return undefined;
    });
  }

  protected getNewViewObject(node: BasicTreeNode) {
    return new BasicNodeViewobject(
      node,
      FontManager.getFont('helv'),
      this._nodeViewObjectMap,
    );
  }


  protected addNode(node: BasicTreeNode) {
    if (!this._nodeViewObjectMap.has(node.key)) {
      const viewObject = this.getNewViewObject(node);
      this._nodeViewObjectMap.set(node.key, viewObject);
      this.add(viewObject);
    }
  }

  protected deleteNode(key: number) {
    if (this._nodeViewObjectMap.has(key)) {
      const vo = this._nodeViewObjectMap.get(key);
      if (vo) {
        this.remove(vo);
        this._nodeViewObjectMap.delete(key);
      }
    }
  }
  
  private _resetAnimatorQueue() {
    if (this._animatorFlows.length) {
      this._animatorFlows.shift();
    }
    this._currentAcitiveAnimators = undefined;
  }

  public update() {
    
    if (this._animatorFlows.length) {
      this._enterAnimating = true;
      this._animatorFlows.forEach((animators, index) => {
        if (index === 0) {
          if (!animators.length) {
            this._resetAnimatorQueue();
          } else {
            if (!this._currentAcitiveAnimators) {
              this._currentAcitiveAnimators = new Set();
              animators.forEach((_, index) => this._currentAcitiveAnimators!.add(index));
            }
            animators.forEach((animator, index) => {
              const isAnimating = animator.animate();
              if (!isAnimating) {
                if (this._currentAcitiveAnimators) {
                  this._currentAcitiveAnimators.delete(index);
                  if (this._currentAcitiveAnimators!.size === 0) {
                    this._resetAnimatorQueue();
                  }
                } else {
                  this._resetAnimatorQueue();
                }
              }
            });
          }
        }
      });
    } else {
      if (this._enterAnimating) {
        this._enterAnimating = false;
        this._app.eventManager.emit(AppEventType.operationDone);
        GlobalNodeDirtyFlows.reset();
      }
    }
  }

  protected _dityFlowsAnimationFlow() {
    const logs: any[] = [];
    this._animatorFlows = [];
    const dirtyNodesFlows = GlobalNodeDirtyFlows.dirtyFlows;
    dirtyNodesFlows.forEach(flowData => {
      logs.push(flowData.flow.map(n => ({ dt: n.data.type, node: n.node, data: n.data })));
      const animators: AnimatorBase[] = [];
      flowData.flow.forEach(info => {
        switch (info.data.type) {
          case NodeDirtyType.visited: {
            if (!info.node) break;
            const viewObject = this._nodeViewObjectMap.get(info.node.key);
            if (viewObject) {
              animators.push(new VisitedNodeAnimator(
                info.node, viewObject
              ));
            }
            break;
          }
          case NodeDirtyType.showText: {
            if (!info.node) {
              message.error(info.data.text, 1);
            } else {
              const viewObject = this._nodeViewObjectMap.get(info.node.key);
              if (viewObject) {
                const text = info.data && info.data.text;
                const duration = info.data && info.data.duration;
                if (text) {
                  animators.push(new ShowTextAnimator({
                    node: info.node,
                    text: text,
                    viewObject,
                    duration: duration && parseInt(duration),
                  }));
                }
              }
            }
            break;
          }
          case NodeDirtyType.changeParent: {

            if (info.node && info.data.newParentKey) {
              const oldParentKey = info.node && info.node.parent && info.node.parent.key;
              if (!oldParentKey) {
                break;
              }
              const viewObject = this._nodeViewObjectMap.get(info.node.key);
              const oldParentViewObject = this._nodeViewObjectMap.get(oldParentKey);
              const newParentViewObject = this._nodeViewObjectMap.get(info.data.newParentKey);
              if (viewObject && newParentViewObject && oldParentViewObject) {
                animators.push(new ShowTextAnimator({
                  viewObject,
                  node: info.node,
                  text: 'Change Parent',
                  duration: 40,
                  positionOffset: new THREE.Vector3(30, -40),
                }));
                animators.push(new ChangeParentAnimator({
                  viewObject,
                  duration: 40,
                  node: info.node,
                  newParentViewObject,
                  oldParentViewObject,
                }));
              }
            }
            break;
          }
          case NodeDirtyType.rightRotated:
          case NodeDirtyType.leftRotated: {
            if (!info.node) break;
            const viewObject = this._nodeViewObjectMap.get(info.node.key);
            const parentKey = info.node.parent && info.node.parent.key;
            if (!parentKey) break;
            if (viewObject) {
              animators.push(new RotatedAnimator(
                {
                  viewObject,
                  node: info.node,
                  parentKey,
                  dirtyType: info.data.type,
                  viewObjectMap: this._nodeViewObjectMap,
                })
              );
            }
            break;
          }
        }
      });
      if (animators.length) {
        this._animatorFlows.push(animators);
      }
    });
    if (!this._animatorFlows.length) {
      this._app.eventManager.emit(AppEventType.operationDone);
    }
    console.log(logs, this._animatorFlows.map(c => c), 'log')
  }

  public leftRotate(key: number) {
    GlobalNodeDirtyFlows.reset();
    const node = this.tree.search(key);
    if (!node) {
      message.error('Not Found node', 0.8);
    } else {
      this.tree.rotateLeft(node, true);
    }
    this._dityFlowsAnimationFlow();
  }

  public rightRotate(key: number) {
    GlobalNodeDirtyFlows.reset();
    const node = this.tree.search(key);
    if (!node) {
      message.error('Not Found node', 0.8);
    } else {
      this.tree.rotateRight(node, true);
    }
    this._dityFlowsAnimationFlow();
  }

}