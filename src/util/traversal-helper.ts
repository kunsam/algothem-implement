import { NNode } from './../tree/basic-binary-tree';
import Queue from '../queue/queue';


export class TraversalHelper {

  public inorder(node: NNode) {
    this._inorderHelper(node);
  }

  private _inorderHelper(root: NNode, callback?: Function) {
    if (root === null) return; 
    this._inorderHelper(root.left);
    if (callback) callback(root);
    console.log('node.key: ', root.key);
    this._inorderHelper(root.right); 
  }

  public inorderTraverse(root: NNode, callback: Function) {
    this._inorderHelper(root, callback);
  }

  public levelOrderTraverse(root: NNode,  callback: Function) {
    if (root === null) return;
    const queue = new Queue();
    queue.push(root);
    console.time('levelOrderTraverse')
    while (!queue.empty()) {
      const temp = queue.pop();
      // console.time('callback')
      setTimeout(() => callback(temp), 1) ;
      // console.timeEnd('callback')
      if (temp.left !== null) {
        queue.push(temp.left);
      }
      if (temp.right !== null) {
        queue.push(temp.right); 
      }
    }
    console.timeEnd('levelOrderTraverse')
  }

  public levelOrder(root: NNode) {
    if (root === null) return; 
    const queue = new Queue();
    queue.push(root); 
    console.time('levelOrder-time')
    while (!queue.empty()) { 
      const temp = queue.pop(); 
      console.log('node.key: ', temp.key);
      if (temp.left !== null) {
        queue.push(temp.left); 
      }
      if (temp.right !== null) {
        queue.push(temp.right); 
      }
    }
    console.timeEnd('levelOrder-time')
  }

}