
import { message } from 'antd';
import 'antd/lib/message/style/index.css';

import { AppBase } from './../../../layouts/app/app';
import { BinarySearchTree } from './../../tree/binary-search-tree';
import { RedBlackTree } from '../../tree/red-black-tree';
import BasicNodeViewobject from './node/basic-node-viewobject';
import { BinaryTreeViewObject } from './binary-tree-viewobject';
import { GlobalNodeDirtyFlows, NodeDirtyType } from './global-node-dirty-flows';


export class BinarySearchTreeViewObject extends BinaryTreeViewObject {

  protected __maxDepthViewObject?: BasicNodeViewobject;

  constructor(app: AppBase, tree: RedBlackTree) {
    super(app, tree);
  }

  public get gettree() {
    return this.tree as BinarySearchTree;
  }

  public insert(key: number) {
    GlobalNodeDirtyFlows.reset();
    if (this.gettree.search(key)) {
      message.error(`${key}已存在!`, 0.8)
      this._app.eventManager.commandEvents().emitOperationDone();
      return;
    }
    this.gettree.insert(key);
    this._dityFlowsAnimationFlow();
  }

  public delete(key: number) {
    GlobalNodeDirtyFlows.reset();
    if (!this.gettree.root) {
      this._app.eventManager.commandEvents().emitOperationDone();
      message.error('不存在树', 0.8);
      return;
    }
    this.gettree.delete(key);
    GlobalNodeDirtyFlows.addToDirtyFlows([{
      node: null,
      data: { key },
      dirtyType: NodeDirtyType.deleted,
    }])
    this._dityFlowsAnimationFlow();
  }

  public search(key: number) {
    GlobalNodeDirtyFlows.reset();
    const findNode = this.gettree.search(key, true);
    if (!findNode) {
      message.error(`${key}不存在!`, 0.8);
      this._app.eventManager.commandEvents().emitOperationDone();
    } else {
      this._dityFlowsAnimationFlow();
    }
  }

  public getMaxDepthNodeViewObject() {
    if (this.__maxDepthViewObject) {
      return this.__maxDepthViewObject;
    }
    const data = this.gettree.getMaxDepthNode();
    if (data.node) {
      this.__maxDepthViewObject = this._nodeViewObjectMap.get(data.node.key);
      return this.__maxDepthViewObject;
    }
    return;
  }

}