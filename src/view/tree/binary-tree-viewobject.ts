import { message } from 'antd';
import * as THREE from 'three';
import FontManager from '../font/font-manager';
import AnimatorBase from './animator/animator-base';
import { AppBase } from './../../../layouts/app/app';
import AnimatorManager from './animator/animator-manager';
import { BasicTreeNode } from './../../tree/node/basic-node';
import BasicNodeViewobject from './node/basic-node-viewobject';
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
  protected _animatorManager: AnimatorManager;
  protected _nodeViewObjectMap: Map<number, BasicNodeViewobject>;

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
    this._animatorManager = new AnimatorManager(
      this._nodeViewObjectMap,
      this._app.eventManager,
    );
    this._initEvent();
  }

  private _initEvent() {
    const onDeleteNode = (context: EventContext) => {
      const key = context.args.key;
      this.deleteNode(key);
    }
    const onAddNode = (context: EventContext) => {
      const node = context.args.node;
      const trueNode = this.tree.search(node.key);
      if (trueNode) {
        this.addNode(trueNode);
        const vo =this._nodeViewObjectMap.get(trueNode.key);
        if (vo) {
          vo.cloneNode = node;
          vo.refresh();
          vo.cloneNode = undefined;
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
    this._app.eventManager.commandEvents().listen(
      AppCommandEventType.rePlay, () => {
      this._dityFlowsAnimationFlow();
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
        this._app.eventManager.commandEvents().emitOperationDone();
      }
    }
  }

  protected _dityFlowsAnimationFlow() {
    const logs: any[] = [];
    this._animatorFlows = [];
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
    console.log(logs, this._animatorFlows.map(c => c), 'log');
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