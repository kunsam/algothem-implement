import { cloneDeep } from 'lodash';
import { NodeDirtyType, NodeDirtyDataGroup, GlobalNodeDirtyFlows } from './../../view/tree/global-node-dirty-flows';



export type NBasicTreeNode = BasicTreeNode | null;
export type VisitNodeFunction = (node: BasicTreeNode) => boolean | undefined;

// 应该再封装一个
export class BasicTreeNode {
  public key: number;
  public _left: NBasicTreeNode;
  public _right: NBasicTreeNode;
  public _parent: NBasicTreeNode;

  public dirty: boolean = false;
  public userData: any;

  constructor(key: number) {
    this.key = key;
    this._left = this._right = this._parent = null;
    this.userData = {};
  }

  public addToFlow(data: NodeDirtyDataGroup) {
    if (GlobalNodeDirtyFlows.isStartSequence) {
      GlobalNodeDirtyFlows.sequenceFlow.push({
        ...data,
        dirtyType: data.dirtyType,
        node: cloneDeep(data.node),
      });
    } else {
      if (this.dirty) {
        GlobalNodeDirtyFlows.addToDirtyFlows([ {
          ...data,
          dirtyType: data.dirtyType,
          node: cloneDeep(data.node),
        }]);
        this.dirty = false;
      }
    }
  }

  public withDirtyWork (node: NBasicTreeNode, func: Function) {
    if (!node) {
      // 这里不能加，应该还要查询是否加到了其它节点下
      // 否则对应还要有个add操作
      // this.addToFlow({
      //   node: null,
      //   dirtyType: NodeDirtyType.deleted,
      //   data: { key: child && child.key }
      // });
    }
    func();
    if(node) {
      // 如果赋值节点是当前的父节点，解除父子关系
      if (this.parent === node) {
        if (this.parent.left === node) {
          this.parent.left = null;
        }
        if (this.parent.right === node) {
          this.parent.right = null;
        }
        this._parent = null;
      }
      // 绑定新的父子关系
      this.addToFlow({
        node: node,
        data: { newParentKey: this.key },
        dirtyType: NodeDirtyType.changeParent,
      });
      node._parent = this;
    }
  }

  public get left() {
    return this._left;
  }

  protected setLeft(node: NBasicTreeNode) {
    this.withDirtyWork(node, () => {
      this._left = node;
    });
  }
  public set left(node: NBasicTreeNode) {
    this.setLeft(node);
  }

  protected setRight(node: NBasicTreeNode) {
    this.withDirtyWork(node, () => {
      this._right = node;
    });
  }
  public get right() {
    return this._right;
  }
  public set right(node: NBasicTreeNode) {
    this.setRight(node);
  }

  // parent 自动计算
  public get parent() {
    return this._parent;
  }

  public isOnLeft(): boolean {
    if (this.parent === null) {
      return true;
    }
    return this === this.parent.left;
  }
  public hasChild() {
    return (this.left !== null || this.right !== null)
  }
  public hasOneChild() {
    return (this.left !== null && this.right === null) ||
      (this.right !== null && this.left === null);
  }
  public hasTwoChild() {
    return (this.left !== null && this.right !== null)
  }

  public leftmost(): BasicTreeNode {
    let temp: BasicTreeNode = this;
    while(temp.left) {
      temp = temp.left;
    }
    return temp;
  }
  public rightmost(): BasicTreeNode {
    let temp: BasicTreeNode = this;
    while(temp.right) {
      temp = temp.right;
    }
    return temp;
  }

  public uncle(): NBasicTreeNode {
    if (this.parent === null || this.parent.parent === null) {
      return null;
    }
    const grandparent = this.parent.parent;
    return this.parent.isOnLeft() ? grandparent.right : grandparent.left;
  }

  public get sibling(): NBasicTreeNode {
    if (this.parent === null) return null;
    return this.isOnLeft() ? this.parent.right : this.parent.left;
  }

  public set sibling(node: NBasicTreeNode) {
    if (this.parent === null) return;
    if (this.isOnLeft()) {
      this.parent.right = node;
    } else {
      this.parent.left = node;
    }
  }

}






