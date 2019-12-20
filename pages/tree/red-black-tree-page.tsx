import * as React from "react";
import { RedBlackTree } from "../../src/tree/red-black-tree";
import { AppBase } from "../../layouts/app/app";
import { AppCanvas } from "../../layouts/app/app-interface";
import { BinaryTreeViewObject } from "../../src/view/tree/binary-tree-viewobject";
import { RedBlackTreeViewObject } from "../../src/view/tree/red-black-tree-viewobject";
import RBPControlPanel from "../../components/control-panel/red-black-page-control-panel";
import RedBlackTreeInfoPanel from "../../components/info-panel/red-black-tree/red-black-tree-info-panel";
import { WithTreeContaier } from "../../layouts/tree-page/tree_page_container";
import TreePageBase, {
  ITreeEvent
} from "../../layouts/tree-page2/tree-page-base";



export enum IRedBlackTreeEventType {
  onFind = "onFind",
  onInsert = "ONINSERT",
  onDelete = "onDelete",
  onLeftRotate = "onLeftRotate",
  onRightRotate = "onRightRotate"
}

export class PageComp extends TreePageBase {

  protected createTreeViewObject(app: AppBase) {
    return new RedBlackTreeViewObject(app, this.getTree());
  }

  public get treevo() {
    return;
  }

  protected getEvent(): ITreeEvent[] {
    return [
      {
        eventType: IRedBlackTreeEventType.onInsert,
        listener: (treevo: BinaryTreeViewObject, key: number) => {
          (treevo as RedBlackTreeViewObject).insert(key);
        }
      },
      {
        eventType: IRedBlackTreeEventType.onDelete,
        listener: (treevo: BinaryTreeViewObject, key: number) => {
          (treevo as RedBlackTreeViewObject).delete(key);
        }
      },
      {
        eventType: IRedBlackTreeEventType.onFind,
        listener: (treevo: BinaryTreeViewObject, key: number) => {
          (treevo as RedBlackTreeViewObject).search(key);
        }
      }
    ];
  }

  protected getTree() {
    const redblacktree = new RedBlackTree();
    // redblacktree.insert(50);
    // redblacktree.insert(30);
    // redblacktree.insert(42);
    // redblacktree.insert(20);
    // redblacktree.insert(18);
    // redblacktree.insert(26);
    // redblacktree.insert(50);
    // redblacktree.insert(82);
    return redblacktree;
  }

  protected getInfoPanel() {
    return <RedBlackTreeInfoPanel />;
  }

  protected getControlPanel() {
    return <RBPControlPanel app={this.props.app} />;
  }

  protected onRenderFrame = (
    treevo: BinaryTreeViewObject,
    canvas: AppCanvas
  ) => {
    const rtreevo = treevo as RedBlackTreeViewObject;
    const maxDepthViewObject = rtreevo.getMaxDepthNodeViewObject();
    if (maxDepthViewObject && maxDepthViewObject.position.y < 200) {
      canvas.grhelper.position.y = maxDepthViewObject.position.y - 200;
    }
  };
}

export default WithTreeContaier(PageComp);
