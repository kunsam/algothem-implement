
import Stack from '../stack/stack';
import Queue from '../queue/queue';
import BasicBinaryTreeUtil from './basic-binary-tree-util';
import { BasicTreeNode, NBasicTreeNode, VisitNodeFunction } from './node/basic-node';


export interface IBasicBinaryTree {
  root: Node;
  insert: (key: number, node?: Node) => void;
  delete: (key: number, node?: Node) => void;
}

export class BasicBinaryTree {
  public root: NBasicTreeNode;

  constructor(root?: NBasicTreeNode) {
    this.root = root === undefined ? null : root;
  }
  public insert(key: number, saveDirtyFlows?: boolean) {
    this.root = BasicBinaryTreeUtil.insert(key, this.root, saveDirtyFlows);
  }

  public delete(key: number) {
    this.root = BasicBinaryTreeUtil.delete(key, this.root);
  }

  public search(key: number): NBasicTreeNode {
    let result: NBasicTreeNode = null;
    this.levelOrderTraverse((node) => {
      if (node.key === key) {
        result = node;
        return true;
      }
      return undefined;
    });
    return result;
  }

  public rotateLeft(node: NBasicTreeNode, showDirty?: boolean) {
    if (!node) return node;
    const props = { node, root: this.root, showDirty };
    BasicBinaryTreeUtil.rotateLeft(props);
    this.root = props.root;
  }

  public rotateRight(node: NBasicTreeNode, showDirty?: boolean) {
    if (!node) return node;
    const props = { node, root: this.root, showDirty };
    BasicBinaryTreeUtil.rotateRight(props);
    this.root = props.root;
  }

  public inorder(node: NBasicTreeNode) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.key);
    this.inorder(node.right);    
  }

  public iterativePreorder(root: NBasicTreeNode) {
    if (root === null) return;
    const stack = new Stack();
    stack.push(root);
    while(!stack.empty()) {
      const node = stack.pop();
      console.log('current key:', node.key);
      if (node.right) {
        stack.push(node.right);
      }
      if (node.left) {
        stack.push(node.left);
      }
    }
  }

  public levelOrder() {
    return this.levelOrderTraverse((node) => {
      console.log('node key:', node.key);
      return undefined;
    });
  }

  public levelOrderTraverse(callback: VisitNodeFunction) {
    const queue = new Queue();
    let tempNode = this.root;
    let isStop = false;
    while(tempNode && !isStop) {
      isStop = !!callback(tempNode);
      if (tempNode.left) {
        queue.Enqueue(tempNode.left)
      }
      if (tempNode.right) {
        queue.Enqueue(tempNode.right)
      }
      tempNode = queue.Dequeue();
    }
  }

  public isMirror(node1: NBasicTreeNode, node2: NBasicTreeNode): boolean {
    if (node1 === null && node2 === null) return true;

    if (node1 && node2 && node1.key === node2.key) {
      return this.isMirror(node1.left, node2.right) && 
        this.isMirror(node1.right, node2.left);
    }

    return false;
  }
 }






const root = new BasicTreeNode(10);
root.left = new BasicTreeNode(11); 
root.left.left = new BasicTreeNode(7); 
root.left.right = new BasicTreeNode(12); 
root.right = new BasicTreeNode(9); 
root.right.left = new BasicTreeNode(15); 
root.right.right = new BasicTreeNode(8); 

/*
           10
        /     \
      11       9
      / \     / \
     7  12   15  8
*/

// const testTree = new BasicBinaryTree(10)
// testTree.inorder(root);
// console.log('\n----')
// testTree.delete(11, root);
// testTree.inorder(root);
// console.log('\n----')
// testTree.insert(11);
// testTree.inorder(root);
// testTree.levelOrderTraverse(root);