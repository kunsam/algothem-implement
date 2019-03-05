import { GlobalNodeDirtyFlows } from './global-node-dirty-flows';
import { AppEventType } from './../../core/event-manager';
import { BasicTreeNode } from './../../tree/node/basic-node';
import { App } from './../../../layouts/app/app-interface';
import { BasicBinaryTree } from './../../tree/basic-binary-tree';
import * as THREE from 'three';
import AnimatorBase from './animator/animator-base';
import FontManager from '../font/font-manager';
import BasicNodeViewobject from './node/basic-node-viewobject';
import { message } from 'antd';


// export 


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
    this._animatorFlows.shift();
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
                this._currentAcitiveAnimators!.delete(index);
                if (this._currentAcitiveAnimators!.size === 0) {
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
      flowData.flow.forEach(data => {

      });
    });
  }

  public insert(key: number) {
    
    GlobalNodeDirtyFlows.reset();
    this.tree.insert(key,);

    console.log(GlobalNodeDirtyFlows.dirtyFlows, 'GlobalNodeDirtyFlows')
    // this.addNode(key);
  }

  public delete(key: number) {
    this.tree.delete(key);
    this.deleteNode(key);
  }

  public leftRotate(key: number) {
    GlobalNodeDirtyFlows.reset();
    const node = this.tree.search(key);
    if (!node) {
      message.error('Not Found node', 0.8);
    } else {
      this.tree.rotateLeft(node);
    }
    console.log(GlobalNodeDirtyFlows.dirtyFlows, 'GlobalNodeDirtyFlows')
  }

  public rightRotate(key: number) {
    GlobalNodeDirtyFlows.reset();
    const node = this.tree.search(key);
    if (!node) {
      message.error('Not Found node', 0.8);
    } else {
      this.tree.rotateLeft(node);
    }
    console.log(GlobalNodeDirtyFlows.dirtyFlows, 'GlobalNodeDirtyFlows')
  }

}