import { cloneDeep } from 'lodash';
import * as THREE from 'three';
import { message } from 'antd';
import 'antd/lib/message/style/index.css';
import FontManager from '../font/font-manager';
import AnimatorBase from './animator/animator-base';
import { RBNode, RBColor } from './../../tree/red-black-tree';
import RotatedAnimator from './animator/rotated-animator';
import { App } from './../../../pages/tree/red-black-tree';
import { getSphereNode, getConnectLineMesh } from './mesh';
import RecolorNodeAnimator from './animator/recolor-animator';
import VisitedNodeAnimator from './animator/visited-node-animator';
import { RedBlackTree, RBNodeDirtyInfo } from '../../tree/red-black-tree';
import ShowTextAnimator from './animator/show-text-animator';
import SwapKeyAnimator from './animator/swapkey-animator';


export enum RBNodeDirtyType{
  none = "NONE",
  insert = "INSERT",
  swapKey = "SWAPKEY",
  visited = "VISITED",
  recolor = "RECOLOR",
  showText = "SHOWTEXT",
  leftRotated = "LEFTROTATED",
  rightRotated = "RIGHTROTATED",
}


export class RBNodeViewObject {
  public node: RBNode;
  public mesh: THREE.Mesh;

  public dirty: boolean = false;
  private _dirtyFrame: number = 0;
  private _oldColor?: THREE.Color;
  public static DirtyMaxFrame: number = 20;

  constructor(node: RBNode, mesh: THREE.Mesh) {
    this.mesh = mesh;
    this.node = node;
  }

  public onDirtyAnimate(onEnd: Function) {
    if (this.dirty && this._dirtyFrame < RBNodeViewObject.DirtyMaxFrame) {
      if (!this._oldColor) {
        this._oldColor = this.mesh.material.color;
      }
      this.mesh.material.color = new THREE.Color(0x00ff00)
      this._dirtyFrame++;
    } else if (this._dirtyFrame >= RBNodeViewObject.DirtyMaxFrame) {
      this._dirtyFrame = 0;
      this.dirty = false;
      this.mesh.material.color = this._oldColor;
      this._oldColor = undefined;
      onEnd();
    }
  }
}




export class RedBlackTreeViewObject extends THREE.Object3D {

  public static originPosition = new THREE.Vector3(0, 400, 0);
  public static horizontalOffset = 80;
  public static verticalOffset = 160;

  public tree: RedBlackTree;
  private _animatorFlows: AnimatorBase[][] = [];
  private _nodeViewObjectMap: Map<number, RBNodeViewObject> = new Map();

  private _app: App;
  private _currentActiveAnimatorsLength?: number;
  private _currentEndAnimatorsLength: number = 0;

  private _enterAnimating: boolean = false;


  constructor(app: App, tree: RedBlackTree) {
    super();
    this._app = app;
    this.tree = tree;
    tree.levelOrderTraverse((node: RBNode) => {
      this.addNode(node);
    });
  }

  public static getChildPosition(rbNode: RBNode, parentPosition: THREE.Vector3) {
    if (!parentPosition) {
      return RedBlackTreeViewObject.originPosition;
    } else {
      const position = parentPosition.clone();
      position.y -= RedBlackTreeViewObject.verticalOffset;
      if (rbNode.isOnLeft()) {
        position.x -= RedBlackTreeViewObject.horizontalOffset;
        if (rbNode.sibling() && rbNode.hasChild()) {
          position.x -= RedBlackTreeViewObject.horizontalOffset;
        }
      } else {
        position.x += RedBlackTreeViewObject.horizontalOffset;
        if (rbNode.sibling() && rbNode.hasChild()) {
          position.x += RedBlackTreeViewObject.horizontalOffset;
        }
      }
      return position;
    }
  }

  public addNode(node: RBNode) {
    const sphereNode = getSphereNode(node, FontManager.getFont('helv'));
    if (sphereNode) {
      const rbNode: RBNode = sphereNode.userData.node;
      const parentPosition = rbNode && rbNode.parent && rbNode.parent.userData.position;
      sphereNode.position.copy(RedBlackTreeViewObject.getChildPosition(rbNode, parentPosition))
      node.userData.position = sphereNode.position;
      const line = getConnectLineMesh(sphereNode);
      if (line) {
        line.userData.isConnectLine = true;
        sphereNode.add(line);
      }
      this._nodeViewObjectMap.set(node.key, new RBNodeViewObject(node, sphereNode));
      this.add(sphereNode);
    }
  }

  private _resetAnimatorQueue() {
    this._animatorFlows.shift();
    this._currentEndAnimatorsLength = 0;
    this._currentActiveAnimatorsLength = undefined;
  }

  public update() {
    // 这里的写法有问题，应该先操作，然后标记对应的节点，按照顺序执行节点动画
    // [ [ ...node], [], []]，前一组执行完才执行下一组
    if (this._animatorFlows.length) {
      this._enterAnimating = true;
      this._animatorFlows.forEach((animators, index) => {
        if (index === 0) {
          if (!animators.length) {
            this._resetAnimatorQueue();
          } else {
            if (!this._currentActiveAnimatorsLength) {
              this._currentActiveAnimatorsLength = animators.length;
            }
            animators.forEach(animator => {
              const isAnimating = animator.animate();
              if (!isAnimating) {
                this._currentEndAnimatorsLength++;
                if (this._currentEndAnimatorsLength === this._currentActiveAnimatorsLength) {
                  this._resetAnimatorQueue();
                  // console.log('next animator ---\n')
                }
              }
            });
          }
        }
      });
    } else {
      if (this._enterAnimating) {
        message.info('Operation Done!', 0.1);
        this._enterAnimating = false;
        this._app.eventManager.emitOperationDone();
      }
    }
  }

  private _dityFlowsAnimationFlow(dirtyNodesFlows: RBNodeDirtyInfo[][]) {
    const logs: any[] = [];
    this._animatorFlows = [];
    console.log(dirtyNodesFlows, 'dirtyNodesFlows')
    dirtyNodesFlows.forEach(nodeArray => {
      logs.push(nodeArray.map(n => ({ dt: n.dirtyType, node: n.node })));
      const animators: AnimatorBase[] = [];
      nodeArray.forEach(info => {
        switch (info.dirtyType) {
          case RBNodeDirtyType.visited: {
            if (!info.node) break;
            const viewobject = this._nodeViewObjectMap.get(info.node.key);
            if (viewobject) {
              animators.push(new ShowTextAnimator({
                node: info.node,
                text: 'Visited',
                mesh: viewobject.mesh,
              }));
              animators.push(new VisitedNodeAnimator(
                info.node, viewobject.mesh
              ));
            }
            break;
          }
          case RBNodeDirtyType.recolor: {
            if (!info.node) break;
            const color = info.data && info.data.color;
            if (color === undefined) break;
            const viewobject = this._nodeViewObjectMap.get(info.node.key);
            if (viewobject) {
              animators.push(new ShowTextAnimator({
                node: info.node,
                text: 'ReColor',
                mesh: viewobject.mesh,
              }));
              animators.push(new RecolorNodeAnimator(
                info.node,
                viewobject.mesh,
                color === 0 ? 0x000000 : color,
              ));
            }
            break;
          }
          case RBNodeDirtyType.rightRotated:
          case RBNodeDirtyType.leftRotated: {
            if (!info.node) break;
            animators.push(new RotatedAnimator(
              info.node,
              info.dirtyType,
              this._nodeViewObjectMap,
            ));
            break;
          }
          case RBNodeDirtyType.showText: {
            if (!info.node) {
              message.error(`NOT Found Node`, 0.1);
            } else {
              const viewobject = this._nodeViewObjectMap.get(info.node.key);
              if (viewobject) {
                const text = info.data && info.data.text;
                const duration = info.data && info.data.duration;
                if (text) {
                  animators.push(new ShowTextAnimator({
                    node: info.node,
                    text: text,
                    mesh: viewobject.mesh,
                    duration: duration && parseInt(duration),
                  }));
                }
              }
            }
            break;
          }
          case RBNodeDirtyType.swapKey: {
            if (info.node && info.data && info.data.relatedNode) {
              const relatedNode = info.data && info.data.relatedNode;
              const viewobject = this._nodeViewObjectMap.get(info.node.key);
              const viewobject2 = this._nodeViewObjectMap.get(relatedNode.key);
              if (viewobject && viewobject2) {
                animators.push(new SwapKeyAnimator(
                  info.node,
                  relatedNode,
                  viewobject.mesh,
                  viewobject2.mesh,
                ));
              }
            }
          }
        }
      });
      this._animatorFlows.push(animators);
    });
    console.log(logs, 'log')
  }

  public insert(key: number) {
    if (!this.tree.root) {
      this.tree.insert(key);
      this.addNode(new RBNode(key));
      return;
    }
    if (this.tree.search(key)) {
      return;
    }

    const dirtyNodesFlows: RBNodeDirtyInfo[][] = this.tree.insert(key, (r) => {
      this.addNode(r);
    });
    this._dityFlowsAnimationFlow(dirtyNodesFlows);
  }

  public delete(key: number) {
    if (!this.tree.root) {
      return;
    }
    const dirtyNodesFlows: RBNodeDirtyInfo[][] | undefined = this.tree.delete(key);
    if (dirtyNodesFlows) {
      // this._dityFlowsAnimationFlow(dirtyNodesFlows);
    }

  }

}