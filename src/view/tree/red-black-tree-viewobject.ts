import { AppEventType } from './../../core/event-manager';
import { message } from 'antd';
import 'antd/lib/message/style/index.css';
import FontManager from '../font/font-manager';
import AnimatorBase from './animator/animator-base';
import AddNodeAnimator from './animator/add-animator';
import { RBNode } from '../../tree/node/red-black-node';
import { RedBlackTree } from '../../tree/red-black-tree';
import SwapKeyAnimator from './animator/swapkey-animator';
import RotatedAnimator from './animator/rotated-animator';
import { App } from './../../../layouts/app/app-interface';
import DeleteNodeAnimator from './animator/delete-animator';
import ShowTextAnimator from './animator/show-text-animator';
import RecolorNodeAnimator from './animator/recolor-animator';
import BasicNodeViewobject from './node/basic-node-viewobject';
import { BinaryTreeViewObject } from './binary-tree-viewobject';
import VisitedNodeAnimator from './animator/visited-node-animator';
import { RBNodeDirtyType } from './../../tree/node/red-black-node';
import RedBlackNodeViewObject from './node/red-black-node-viewobject';
import { GlobalNodeDirtyFlows, NodeDirtyType } from './global-node-dirty-flows';


export class RedBlackTreeViewObject extends BinaryTreeViewObject {

  private __maxDepthViewObject?: RedBlackNodeViewObject;

  constructor(app: App, tree: RedBlackTree) {
    super(app, tree);
  }

  public getNewViewObject(node: RBNode) {
    return new RedBlackNodeViewObject(
      node,
      FontManager.getFont('helv'),
      this._nodeViewObjectMap,
    );
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
          case RBNodeDirtyType.recolor: {
            if (!info.node) break;
            const color = info.data && info.data.color;
            if (color === undefined) break;
            const viewObject = this._nodeViewObjectMap.get(info.node.key);
            if (viewObject) {
              animators.push(new RecolorNodeAnimator(
                info.node,
                viewObject,
                color === 0 ? 0x000000 : color,
              ));
            }
            break;
          }
          case NodeDirtyType.rightRotated:
          case NodeDirtyType.leftRotated: {
            if (!info.node) break;
            const viewObject = this._nodeViewObjectMap.get(info.node.key);
            if (viewObject) {
              animators.push(new RotatedAnimator(
                info.node,
                viewObject,
                info.data.type,
                this._nodeViewObjectMap,
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
          case NodeDirtyType.swapKey: {
            if (info.node && info.data && info.data.relatedNode) {
              const relatedNode = info.data && info.data.relatedNode;
              const viewobject = this._nodeViewObjectMap.get(info.node.key);
              const viewobject2 = this._nodeViewObjectMap.get(relatedNode.key);
              if (viewobject && viewobject2) {
                animators.push(new SwapKeyAnimator(
                  info.node,
                  relatedNode,
                  viewobject,
                  viewobject2,
                ));
                this._nodeViewObjectMap.set(relatedNode.key, viewobject);
                this._nodeViewObjectMap.set(info.node.key, viewobject2);
              }
            }
            break;
          }
          case NodeDirtyType.deleted: {
            if (info.data.key !== undefined) {
              const viewobject = this._nodeViewObjectMap.get(info.data.key);
              if (viewobject) {
                const self = this;
                animators.push(new DeleteNodeAnimator(
                  new RBNode(info.data.key),
                  viewobject,
                  () => {
                    self.deleteNode(info.data.key);
                  }
                ));
              }
            }
            break;
          }
          case NodeDirtyType.added: {
            if (info.node) {
              animators.push(new AddNodeAnimator(
                info.node,
                new BasicNodeViewobject(info.node, FontManager.getFont('helv')),
                () => {
                  const trueNode = (this.tree as RedBlackTree).search(info.node!.key);
                  if (trueNode) {
                    this.addNode(trueNode as RBNode);
                    const vo =this._nodeViewObjectMap.get(trueNode.key);
                    if (vo) {
                      vo.cloneNode = info.node!;
                      vo.refresh();
                      vo.cloneNode = undefined;
                    }
                  }
                }
              ));
            }
            break;
          }
        }
      });
      if (animators.length) {
        this._animatorFlows.push(animators);
      }
    });
    console.log(logs, this._animatorFlows.map(c => c), 'log')
  }

  public get rtree() {
    return this.tree as RedBlackTree;
  }

  public insert(key: number) {
    GlobalNodeDirtyFlows.reset();
    if (this.rtree.search(key)) {
      message.error(`${key}已存在!`, 0.8)
      this._app.eventManager.emit(AppEventType.operationDone);
      return;
    }
    this.rtree.insert(key);
    this._dityFlowsAnimationFlow();
    this.__maxDepthViewObject = undefined;
  }

  public delete(key: number) {
    GlobalNodeDirtyFlows.reset();
    if (!this.rtree.root) {
      this._app.eventManager.emit(AppEventType.operationDone);
      message.error('不存在树', 0.8);
      return;
    }
    this.rtree.delete(key);
    GlobalNodeDirtyFlows.addToDirtyFlows([{
      node: null,
      data: { key },
      dirtyType: NodeDirtyType.deleted,
    }])
    this._dityFlowsAnimationFlow();
    this.__maxDepthViewObject = undefined;
  }

  public search(key: number) {
    GlobalNodeDirtyFlows.reset();
    const findNode = this.rtree.search(key, true);
    if (!findNode) {
      message.error(`${key}不存在!`, 0.8);
      this._app.eventManager.emit(AppEventType.operationDone);
    } else {
      this._dityFlowsAnimationFlow();
    }
  }

  public getMaxDepthNodeViewObject() {
    if (this.__maxDepthViewObject) {
      return this.__maxDepthViewObject;
    }
    const data = this.rtree.getMaxDepthNode();
    if (data.node) {
      this.__maxDepthViewObject = this._nodeViewObjectMap.get(data.node.key);
      return this.__maxDepthViewObject;
    }
    return;
  }

}