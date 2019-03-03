import Queue from "../queue/queue";
import Stack from "../stack/stack";


export type NNode = Node | null;

export class Node {
  public key: number;
  public left: NNode;
  public right: NNode;
  constructor(key: number) {
    this.key = key;
    this.left = this.right = null;
  }
}


export interface IBasicBinaryTree {
  root: Node;
  insert: (key: number, node?: Node) => void;
  delete: (key: number, node?: Node) => void;
}

export class BasicBinaryTree {
  public root: Node;

  constructor(rootKey: number) {
    this.root = new Node(rootKey);
  }

  public insert(key: number, node?: Node) {
    const queue = new Queue();
    queue.push(node || this.root); 

    let temp: Node;
    while (!queue.empty()) { 
      temp = queue.pop(); 
      if (!temp.left) { 
          temp.left = new Node(key); 
          break; 
      } else queue.push(temp.left); 

      if (!temp.right) { 
          temp.right = new Node(key); 
          break; 
      } else queue.push(temp.right); 
    } 
  }

  // https://www.geeksforgeeks.org/deletion-binary-tree/
  public delete(key: number, node?: Node) {
    let keyNode: NNode;
    const queue = new Queue();

    const nodeRoot = node || this.root;
    queue.push(nodeRoot);

    let temp: Node;
    while (!queue.empty()) { 
      temp = queue.pop();
      if (temp.key === key) keyNode = temp; 
      if (temp.left) queue.push(temp.left); 
      if (temp.right) queue.push(temp.right);
    }
    if (keyNode) {
      const x = temp.key;
      this._deletDeepest(nodeRoot, temp); 
      keyNode.key = x; 
    }
  }

  private _deletDeepest(root: Node, deleteNode: Node) {
    const queue = new Queue();
    queue.push(root);

    let temp: Node;
    while(!queue.empty()) {
      temp = queue.pop();
      if (temp.right) { 
        if (temp.right.key === deleteNode.key) { 
            temp.right = null;
            return;
        } else queue.push(temp.right); 
      }

      if (temp.left) {
        if (temp.left.key === deleteNode.key) { 
            temp.left = null;
            return;
        } else queue.push(temp.left); 
      }
    }

  }

  public inorder(node: NNode) {
    if (!node) return;
    this.inorder(node.left);
    console.log(node.key);
    this.inorder(node.right);    
  }

  public iterativePreorder(root: NNode) {
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

  public levelOrderTraverse(node: Node) {
    const queue = new Queue();
    let tempNode = node;
    while(tempNode) {
      console.log(tempNode.key)
      if (tempNode.left) {
        queue.Enqueue(tempNode.left)
      }
      if (tempNode.right) {
        queue.Enqueue(tempNode.right)
      }
      tempNode = queue.Dequeue();
    }
  }

  public isMirror(node1: NNode, node2: NNode) {
    if (node1 === null && node2 === null) return true;

    if (node1 && node2 && node1.key === node2.key) {
      return this.isMirror(node1.left, node2.right) && 
        this.isMirror(node1.right, node2.left);
    }

    return false;
  }
 }






const root = new Node(10);
root.left = new Node(11); 
root.left.left = new Node(7); 
root.left.right = new Node(12); 
root.right = new Node(9); 
root.right.left = new Node(15); 
root.right.right = new Node(8); 

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