import { message } from 'antd';
import 'antd/lib/message/style/index.css';
import FontManager from '../font/font-manager';
import { AppBase } from './../../../layouts/app/app';
import { RBNode } from '../../tree/node/red-black-node';
import { RedBlackTree } from '../../tree/red-black-tree';
import RecolorNodeAnimator from './animator/recolor-animator';
import { RBNodeDirtyType } from './../../tree/node/red-black-node';
import RedBlackNodeViewObject from './node/red-black-node-viewobject';
import { BinarySearchTreeViewObject } from './binary-search-tree-viewobject';
import { GlobalNodeDirtyFlows, NodeDirtyType, NodeDataPair } from './global-node-dirty-flows';


export class RedBlackTreeViewObject extends BinarySearchTreeViewObject {

  constructor(app: AppBase, tree: RedBlackTree) {
    super(app, tree);
    this._regiterAnimator();
  }

  private _regiterAnimator() {
    this._animatorManager.registerAnimator(
      RBNodeDirtyType.recolor,
      (info: NodeDataPair) => {
        const animators = []
        if (!info.node) return [];
        const color = info.data && info.data.color;
        if (color === undefined) return [];
        const viewObject = this._nodeViewObjectMap.get(info.node.key);
        if (viewObject) {
          animators.push(new RecolorNodeAnimator(
            info.node,
            viewObject,
            color === 0 ? 0x000000 : color,
          ));
        }
        return animators;
      }
    );

  }

  public getNewViewObject(node: RBNode) {
    return new RedBlackNodeViewObject(
      node,
      FontManager.getFont('helv'),
    );
  }

  public get rtree() {
    return this.tree as RedBlackTree;
  }

  public insert(key: number) {
    GlobalNodeDirtyFlows.reset();
    if (this.rtree.search(key)) {
      message.error(`${key}已存在!`, 0.8)
      this._app.eventManager.commandEvents().emitOperationDone();
      return;
    }
    this.rtree.insert(key);
    this.saveViewObjects();
    this.updateViewObjectsRelation();
    this._dityFlowsAnimationFlow();
    this.__maxDepthViewObject = undefined;
  }

  public delete(key: number) {
    GlobalNodeDirtyFlows.reset();
    if (!this.rtree.root) {
      this._app.eventManager.commandEvents().emitOperationDone();
      message.error('不存在树', 0.8);
      return;
    }
    this.rtree.delete(key);
    GlobalNodeDirtyFlows.addToDirtyFlows([{
      node: null,
      data: { key },
      dirtyType: NodeDirtyType.deleted,
    }]);
    this.saveViewObjects();
    this.updateViewObjectsRelation();
    this._dityFlowsAnimationFlow();
    this.__maxDepthViewObject = undefined;
  }

  public search(key: number) {
    GlobalNodeDirtyFlows.reset();
    const findNode = this.rtree.search(key, true);

    if (!findNode) {
      message.error(`${key}不存在!`, 0.8);
      this._app.eventManager.commandEvents().emitOperationDone();
    } else {
      GlobalNodeDirtyFlows.addToDirtyFlows([{
        node: findNode,
        data: { text: 'target!' },
        dirtyType: NodeDirtyType.showText,
      }]);
      this.saveViewObjects();
      this.updateViewObjectsRelation();
      this._dityFlowsAnimationFlow();
    }
  }



}