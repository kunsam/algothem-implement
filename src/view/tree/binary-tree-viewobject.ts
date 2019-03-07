import { BinarySearchTreeTransformUtil } from './../../tree/binary-search-tree-util';
import { message } from 'antd';
import * as THREE from 'three';
import FontManager from '../font/font-manager';
import AnimatorBase from './animator/animator-base';
import { AppBase } from './../../../layouts/app/app';
import AnimatorManager from './animator/animator-manager';
import { BasicTreeNode } from './../../tree/node/basic-node';
import BasicNodeViewobject, { NBasicNodeViewobject } from './node/basic-node-viewobject';
import { BasicBinaryTree } from './../../tree/basic-binary-tree';
import { GlobalNodeDirtyFlows } from './global-node-dirty-flows';
import { AppCommandEventType } from './../../core/contants/events';
import { EventContext } from '../../core/event/context/event-context';


export enum IBinaryTreeViewObjectEvent{
  deleteNode = 'deleteNode',
  addNode = 'addNode'
}



export class BinaryTreeViewObject extends THREE.Object3D {
  public tree: BasicBinaryTree;

  protected _app: AppBase;
  protected _disableAnimate: boolean = false;
  protected _animatorManager: AnimatorManager;

  protected _nodeViewObjectMap: Map<number, BasicNodeViewobject>;

  protected _lastNodeViewObjectMap: Map<number, any>;

  protected _enterAnimating: boolean = false;
  protected _currentAcitiveAnimators?: Set<number>;
  protected _animatorFlows: AnimatorBase[][] = [];

  constructor(app: AppBase, tree: BasicBinaryTree) {
    super();
    this._app = app;
    this.tree = tree;
    this._nodeViewObjectMap = new Map();
    tree.levelOrderTraverse((node: BasicTreeNode) => {
      this.addNode(node);
      return undefined;
    });
    this.reshapeTree();
    this.updateViewObjectsRelation(true);
    this._animatorManager = new AnimatorManager(
      this._nodeViewObjectMap,
      this._app.eventManager,
    );
    this._initEvent();
    this._lastNodeViewObjectMap = new Map();
    this.saveViewObjects();
  }

  public reshapeTree() {
    const rootKey = this.tree.root && this.tree.root.key;
    if (!rootKey) return;
    const rootVo = this._nodeViewObjectMap.get(rootKey);
    if (!rootVo) return;
    this.updateViewObjectsRelation();
    const inorder = BinarySearchTreeTransformUtil.toInorderArray(this.tree.root, []);
    const rootIndex = inorder.findIndex(key => key === rootKey);
    if (rootIndex === undefined) return;
    // console.log(inorder, rootVo, rootIndex, 'reshapeTreereshapeTree inorder')
    inorder.forEach((key, index) => {
      const vo = this._nodeViewObjectMap.get(key);
      if (vo) {
        const delta = index - rootIndex;
        const vopos = vo.position.clone();
        vopos.x = delta * BasicNodeViewobject.horizontalOffset;
        vo.updatePosition(vopos);
      }
    });
    this._nodeViewObjectMap.forEach(vo => {
      if (vo.node.parent) {
        const pvo = this._nodeViewObjectMap.get(vo.node.parent.key);
        if (pvo) {
          vo.refreshLineMesh(pvo.position);
        }
      }
    });
  }

  public toInorderArrayUtil(root: NBasicNodeViewobject, inorder: BasicNodeViewobject[] = []) {
    if (root === undefined) return inorder;
    inorder = this.toInorderArrayUtil(root.left, inorder);
    inorder.push(root);
    inorder = this.toInorderArrayUtil(root.right, inorder);
    return inorder;
  }

  public reloadTreeViewObject(tree: BasicBinaryTree) {
    this.tree = tree;
    this.remove(...this.children);
    this._nodeViewObjectMap.clear();
    tree.levelOrderTraverse((node: BasicTreeNode) => {
      this.addNode(node);
      return undefined;
    });
    this.updateViewObjectsRelation(true);
    this._lastNodeViewObjectMap.clear();
    this.saveViewObjects();
    this._enterAnimating = false;
    this._animatorFlows = [];
    if (this._currentAcitiveAnimators) {
      this._currentAcitiveAnimators = undefined;
    }
  }
  

  public saveViewObjects() {
    this._nodeViewObjectMap.forEach(vo => {
      this._lastNodeViewObjectMap.set(vo.node.key, {
        position: vo.position.clone(),
        lastParentKey: vo.vparent && vo.vparent.node.key,
      })
    });
  }

  public updateViewObjectsRelation(isRefresh?: boolean) {
    this._nodeViewObjectMap.forEach(vo => {
      const node = this.tree.search(vo.node.key);
      if (node) {
        if (node.left) {
          const leftvo = this._nodeViewObjectMap.get(node.left.key);
          vo.left = leftvo;
        }
        if (node.right) {
          const rightvo = this._nodeViewObjectMap.get(node.right.key);
          vo.right = rightvo;
        }
        if (!node.parent) {
          vo.vparent = undefined;
        }
        if (isRefresh) {
          vo.refresh();
        }
      }
    });
  }

  protected _listenNodeAddedAndDeleted() {
    const onDeleteNode = (context: EventContext) => {
      const key = context.args.key;
      this.deleteNode(key);
    }
    const onAddNode = (context: EventContext) => {
      const node = context.args.node;
      const trueNode = this.tree.search(node.key);
      if (node && trueNode) {
        this.addNode(trueNode);
        const vo = this._nodeViewObjectMap.get(node.key);
        if (vo && node.parent) {
          const pvo = this._nodeViewObjectMap.get(node.parent.key);
          if (pvo) {
            vo.connectToOther(pvo);
            // this.reshapeTree();
            // 性能
          }
        }
      }
    }
    this._app.eventManager.commandEvents().listen(
      IBinaryTreeViewObjectEvent.deleteNode,
      onDeleteNode.bind(this)
    );
    this._app.eventManager.commandEvents().listen(
      IBinaryTreeViewObjectEvent.addNode,
      onAddNode.bind(this)
    );
  }

  private _initEvent() {
    this._listenNodeAddedAndDeleted();
    this._app.eventManager.commandEvents().listen(
      AppCommandEventType.rePlay, () => {
      this.onRelayAnimate();
    });
    this._app.eventManager.commandEvents().listen(
      AppCommandEventType.toggleAnimate, () => {
        this._disableAnimate = !this._disableAnimate;
      }
    );
    this._app.eventManager.commandEvents().listen(
      AppCommandEventType.onSelectTree,
      (context: EventContext) => {
        this.reloadTreeViewObject(context.args as BasicBinaryTree);
      }
    );
  }

  protected getNewViewObject(node: BasicTreeNode) {
    return new BasicNodeViewobject(node, FontManager.getFont('helv'));
  }

  protected addNode(node: BasicTreeNode) {
    if (!this._nodeViewObjectMap.has(node.key)) {
      const viewObject = this.getNewViewObject(node);
      if (node.parent) {
        const pvo = this._nodeViewObjectMap.get(node.parent.key);
        if (pvo) {
          if (node.parent.left === node) {
            pvo.left = viewObject;
          }
          if (node.parent.right === node) {
            pvo.right = viewObject;
          }
        }
      }
      this._nodeViewObjectMap.set(node.key, viewObject);
      this.add(viewObject);
    }
    if (!this._enterAnimating) {
      this.reshapeTree();
    }

  }

  protected deleteNode(key: number) {
    if (this._nodeViewObjectMap.has(key)) {
      const vo = this._nodeViewObjectMap.get(key);
      if (vo) {
        if (vo.vparent) {
          if (vo.vparent.left === vo) {
            vo.vparent.left = undefined;
          }
          if (vo.vparent.right === vo) {
            vo.vparent.right = undefined;
          }
        }
        this.remove(vo);
        this._nodeViewObjectMap.delete(key);
      }
    }
    if (!this._enterAnimating) {
      this.reshapeTree();
    }
  }
  
  private _resetAnimatorQueue() {
    if (this._disableAnimate) {
      this._nodeViewObjectMap.forEach(vo => vo.refresh);
    }
    if (this._animatorFlows.length) {
      this._animatorFlows.shift();
    }
    this._currentAcitiveAnimators = undefined;
  }

  public onRelayAnimate() {
    if (this._enterAnimating) return;
    this._nodeViewObjectMap.forEach(vo => {
      const lastData = this._lastNodeViewObjectMap.get(vo.node.key);
      if (lastData) {
        vo.updatePosition(lastData.position);
      }
    });
    this._nodeViewObjectMap.forEach(vo => {
      const lastData = this._lastNodeViewObjectMap.get(vo.node.key);
      if (lastData && lastData.lastParentKey) {
        const lparent = this._nodeViewObjectMap.get(lastData.lastParentKey);
        if (lparent) {
          vo.connectToOther(lparent);
        }
      }
    });
    this._dityFlowsAnimationFlow();
    // console.log(this._animatorFlows, this._lastNodeViewObjectMap, 'this._animatorFlows')
  }

  public onAnimateStart() {
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
        // trueend
        this.reshapeTree();
        this._app.eventManager.commandEvents().emitOperationDone();
      }
    }
  }

  protected _dityFlowsAnimationFlow() {

    if (this._disableAnimate) {
      return;
    }
    
    const logs: any[] = [];
    // this._animatorFlows = [];
    const dirtyNodesFlows = GlobalNodeDirtyFlows.dirtyFlows;
    dirtyNodesFlows.forEach(flowData => {
      logs.push(flowData.flow.map(n => ({ dt: n.data.type, node: n.node, data: n.data })));
      let animators: AnimatorBase[] = [];
      flowData.flow.forEach(info => {
        const infoAnimtors = this._animatorManager.getAnimators(info);
        animators = animators.concat(infoAnimtors);
      });
      if (animators.length) {
        this._animatorFlows.push(animators);
      }
    });
    if (!this._animatorFlows.length) {
      this._app.eventManager.commandEvents().emitOperationDone();
    }
    this.onAnimateStart();
    console.log(logs, this._animatorFlows.map(c => c), 'log');
  }

  public leftRotate(key: number) {
    GlobalNodeDirtyFlows.reset();
    const node = this.tree.search(key);
    if (!node) {
      message.error('Not Found node', 0.8);
    } else {
      this.tree.rotateLeft(node, true);
      this.saveViewObjects();
      this.updateViewObjectsRelation();
    }
    this._dityFlowsAnimationFlow();
    if (this._disableAnimate) {
      this.reloadTreeViewObject(this.tree);
      this._app.eventManager.commandEvents().emitOperationDone();
    }
  }

  public rightRotate(key: number) {
    GlobalNodeDirtyFlows.reset();
    const node = this.tree.search(key);
    if (!node) {
      message.error('Not Found node', 0.8);
    } else {
      this.tree.rotateRight(node, true);
      this.saveViewObjects();
      this.updateViewObjectsRelation();
    }
    this._dityFlowsAnimationFlow();
    if (this._disableAnimate) {
      this.reloadTreeViewObject(this.tree);
      this._app.eventManager.commandEvents().emitOperationDone();
    }
  }

}