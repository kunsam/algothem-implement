import * as React from 'react'
import { App } from '../../layouts/app/app-interface';
import { BinarySearchTree } from '../../src/tree/binary-search-tree';
import { BinaryTreeViewObject } from '../../src/view/tree/binary-tree-viewobject';
import { WithTreePageBase, WithTreeContaier } from '../../layouts/tree-page/tree-page-base';
import BinarySearchTreeInfoPanel from '../../components/info-panel/baisc-binary-tree/binary-seach-tree-info-panel';
import BinarySearchTreeControlPanel from '../../components/control-panel/binary-search-tree/binary-search-tree-control-panel';


export enum IBinarySearchTreeEventType{
  onFind = 'onFind',
  onInsert = 'ONINSERT',
  onDelete = 'onDelete',
  onLeftRotate = 'onLeftRotate',
  onRightRotate = 'onRightRotate',
  onSetFromLevelOrder = 'onSetFromLevelOrder',
}

class BinarySeachTreePage extends WithTreePageBase() {

  protected getTree() {
   const tree = new BinarySearchTree();
   tree.insert(50);
   tree.insert(30);
   tree.insert(42);
   tree.insert(20);
   tree.insert(18);
   tree.insert(26);
   tree.insert(50);
   tree.insert(82);
   return tree;
  }

  protected getEvent() {
    return [
      {
        eventType: IBinarySearchTreeEventType.onFind,
        listener: (tree: BinaryTreeViewObject) => {
          // tree
        },
      },
      {
        eventType: IBinarySearchTreeEventType.onLeftRotate,
        listener: (tree: BinaryTreeViewObject) => {
          console.log(tree, 'treetree')
        },
      },
    ]
  }

  protected createTreeViewObject(app: App): BinaryTreeViewObject {
    return new BinaryTreeViewObject(app, this.getTree());
  }

  protected getInfoPanel() {
    return <BinarySearchTreeInfoPanel />
  }

  protected getControlPanel(app: App) {
    return <BinarySearchTreeControlPanel app={app} />
  }
  
 }

 export default WithTreeContaier(BinarySeachTreePage);

