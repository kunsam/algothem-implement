

import { BasicBinaryTree } from '../../src/tree/basic-binary-tree';
import { BinaryTreeViewObject } from '../../src/view/tree/binary-tree-viewobject';
import { WithTreePageBase, WithTreeContaier, ITreeEvent } from '../../layouts/tree-page/tree-page-base';
import { App } from '../../layouts/app/app-interface';


export enum IBasicTreeEventType{
  onLeftRotate = 'onLeftRotate',
  onRightRotate = 'onRightRotate',
}


class BinaryTreePage extends WithTreePageBase() {
 
   protected getEvent(): ITreeEvent[] {
     return [
       {
         eventType: IBasicTreeEventType.onLeftRotate,
         listener: (treevo: BinaryTreeViewObject, key: number) => {
          treevo.leftRotate(key);
         },
       },
       {
         eventType: IBasicTreeEventType.onRightRotate,
         listener: (treevo: BinaryTreeViewObject, key: number) => {
          treevo.rightRotate(key);
         },
       },
     ]
   }

   protected getTree() {
    const tree = new BasicBinaryTree();
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

   protected createTreeViewObject(app: App) {
    return new BinaryTreeViewObject(app, this.getTree());
   }
 
  }
 

 
  export default WithTreeContaier(BinaryTreePage);
 
 