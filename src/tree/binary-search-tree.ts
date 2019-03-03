import { Node, NNode, BasicBinaryTree } from './basic-binary-tree';
import { MergeSort, MergeSortWithArray } from '../sorting';
import Queue from '../queue/queue';
import Stack from '../stack/stack';


export class NodeWithLimit {
  public node: Node;
  public min: number;
  public max: number;
  constructor(node: Node, min: number = -Infinity, max: number = Infinity) {
    this.node = node;
    this.min = min;
    this.max = max;
  }
}

export class BinarySearchTree{
  public root: Node;

  constructor(root: Node = null) {
    this.root = root;
  }
  public insert(key: number, node: NNode = this.root) {
    if (node === null) return new Node(key);

    if (key < node.key) {
      node.left = this.insert(key, node.left);
    } else if (key > node.key) {
      node.right = this.insert(key, node.right);
    }

    return node;
  }

  public search(key: number, node: NNode = this.root) {
    if (node === null || key === node.key) return new Node(key);

    if (key > node.key) {
      return this.search(key, node.right);
    }

    return this.search(key, node.left);
  }

  public inorder(node: NNode = this.root) { 
      if (node !== null) { 
          this.inorder(node.left); 
          console.log('node.key:', node.key)
          this.inorder(node.right); 
      } 
  }

  public minValueNode(node: Node = this.root) {
    let current: Node = node;
    while(current.left !== null) {
      current = current.left;
    }
    return current;
  }

  public delete(key: number, node: NNode = this.root) {
    if (node === null) return node;

    if (key < node.key) {
      node.left = this.delete(key, node.left);
    } else if (key > node.key) {
      node.right = this.delete(key, node.right);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      }
      // node with two children: Get the inorder successor (smallest 
      // in the right subtree) 
      const minValueNode = this.minValueNode(node.right);
      node.key = minValueNode.key;
      node.right = this.delete(minValueNode.key, node.right);
    }
    return node;
  }

  public setFromBinaryTree(root: NNode) {
    if (root === null) {
      this.root = root;
      return;
    }
    const inorder = BinarySearchTree.getInorderArray(root, []).sort((a, b) => a - b);
    this.setFromInorderArrayUtil(inorder, root, { index: 0 });
    return this;
  }

  public setFromInorderArray(inorderArray: number[]) {
    this.root = this._sortedArrayToBST(inorderArray);
    return this;
  }

  private _sortedArrayToBST(array: number[], start: number = 0, end: number = array.length - 1) {
    if (start > end) return null;
    const mid = Math.round((start + end)  / 2);
    const root = new Node(array[mid]);
    root.left = this._sortedArrayToBST(array, start, mid - 1);
    root.right = this._sortedArrayToBST(array, mid + 1, end);
    return root;
  }

  public setFromInorderArrayUtil(inorderArray: number[], root: NNode, indexObj: any = { index: 0 }) {
    if (root === null) return null;
    this.setFromInorderArrayUtil (inorderArray, root.left, indexObj);
    root.key = inorderArray[indexObj.index++] ;
    this.setFromInorderArrayUtil (inorderArray, root.right, indexObj);
    return root;
  }

  public setFromPreorderArray(preorderArray: number[]) {
    this.root = this.setFromPreorderArrayUtil(preorderArray);
    return this;
  }

  public setFromPreorderArrayUtil(preorderArray: number[], indexObj: any = { index: 0 }, min: number = -Infinity, max: number = Infinity) {
    if (indexObj.index >= preorderArray.length) return;
    let root = null;
    const key = preorderArray[indexObj.index];
    if (key > min && key < max) {
      root = new Node(key);
      indexObj.index++;
      if (indexObj.index < preorderArray.length) {
        root.left = this.setFromPreorderArrayUtil(preorderArray, indexObj, min, key);
        root.right = this.setFromPreorderArrayUtil(preorderArray, indexObj, key, max);
      }
    }
    return root;
  }

  public setFromLevelOrderArray(array: number[]) {
    if (array.length === 0) return this;

    let i = 0;
    const newNode = new NodeWithLimit(new Node(array[i++]));
    const queue = new Queue();
    queue.push(newNode);

    while(i !== array.length) {
      const temp = queue.pop() as NodeWithLimit;
      if (i < array.length && (array[i] < temp.node.key && array[i] > temp.min)) {
        const cnewNode = new NodeWithLimit(new Node(array[i++]), temp.min, temp.node.key);
        queue.push(cnewNode);
        temp.node.left = cnewNode.node;
      }
      if (i < array.length && (array[i] > temp.node.key && array[i] < temp.max)) {
        const cnewNode = new NodeWithLimit(new Node(array[i++]), temp.node.key, temp.max);
        queue.push(cnewNode);
        temp.node.right = cnewNode.node;
      }
    }
    this.root = newNode.node;
    return this;
  }

  public static countNodes(root: NNode) {
    if (root === null) return 0;
    return BinarySearchTree.countNodes(root.left) + BinarySearchTree.countNodes(root.right) + 1;
  }

  public static getInorderArray(root: NNode, inorder: number[] = []) {
    if (root === null) return inorder;
    inorder = BinarySearchTree.getInorderArray(root.left, inorder);
    inorder.push(root.key);
    inorder = BinarySearchTree.getInorderArray (root.right, inorder);
    return inorder;
  }

  public static sortedArrayToBST(array: number[], start: number = 0, end: number = array.length - 1) {
    if (start > end) return null;
    const mid = Math.round((start + end) / 2); 
    const node = new Node(array[mid]);
    node.left = BinarySearchTree.sortedArrayToBST(array, start, mid - 1);
    node.right = BinarySearchTree.sortedArrayToBST(array, mid + 1, end);
    return node;
  }

  public merge(binaryST: BinarySearchTree) {
    const thisOrderArray = BinarySearchTree.getInorderArray(this.root);
    const anotherBSTOrderArray = BinarySearchTree.getInorderArray(binaryST.root);
    const mergedArray = MergeSortWithArray(thisOrderArray, anotherBSTOrderArray);
    this.root = BinarySearchTree.sortedArrayToBST(mergedArray);
    return this;
  }

      
  /**
   * 获得第K个最小的元素 | O(n)
   * Node 中加入一个 lCount: number 可使时间复杂度降低到 O(h);
   * @param {number} k
   * @returns
   * @memberof BinarySearchTree
   */
  public getKthSmallestElement(k: number) {
    const stack = new Stack();
    let pCrawl = this.root;
    while( pCrawl ) {
      stack.push(pCrawl);
      pCrawl = pCrawl.left;
    }
    while(pCrawl = stack.pop()) {
      if (!--k) break;
      // find inorder successor
      if (pCrawl.right) {
        pCrawl = pCrawl.right;
        while( pCrawl ) {
          stack.push(pCrawl);
          pCrawl = pCrawl.left;
        }
      }
    }
    return pCrawl;
  }

  // 
  /**
   * use morris traversal base on https://en.wikipedia.org/wiki/Threaded_binary_tree;
   * Merit: don't use recursion or stack and use O(1) Extra Space
   * @param {number} k
   * @returns
   * @memberof BinarySearchTree
   */
  public getKthSmallestElementWithMorrisTraversal(k: number) {
    let count = 0;
    let kthSmall: NNode = null;;
    let current = this.root;
    while(current) {
      if (current.left === null) { 
          count++; 
          if (count === k) {
            kthSmall = current;
          }
          current = current.right; 
      } else {
        let pre = current.left;
        // create links to Inorder Successor
        while (pre.right && pre.right.key !== current.key) {
          pre = pre.right;
        }
        if (pre.right === null) {
          pre.right = current; 
          current = current.left;
        } else {
          pre.right = null;
          count++;
          if (count === k) {
            kthSmall = current;
          }
          current = current.right; 
        }
      }
    }
    return kthSmall;
  }

}

function getABinarySearchTree() {
  const bst = new BinarySearchTree(new Node(50));
  bst.insert(30);
  bst.insert(20); 
  bst.insert(40); 
  bst.insert(70); 
  bst.insert(60); 
  bst.insert(80);
  return bst;
}

function checkDelete() {
  const bst = getABinarySearchTree();

  console.log('inorder---')
  bst.inorder();
  
  bst.delete(20);
  console.log('inorder---')
  bst.inorder();
  
  
  bst.delete(30);
  console.log('inorder---')
  bst.inorder();
  
  bst.delete(50);
  console.log('inorder---')
  bst.inorder();
}

function checkSetFromBinaryTree() {
  const root = new Node(10); 
  root.left = new Node(30); 
  root.right = new Node(15); 
  root.left.left = new Node(20);
  root.right.right = new Node(5);
  const bst = new BinarySearchTree(root).setFromBinaryTree(root);
  bst.inorder();
}
function checksetFromPreorderArray() {
  const pre = [10, 5, 1, 7, 40, 50];
  const bst = new BinarySearchTree(null).setFromPreorderArray(pre);
  bst.inorder();
}

function checkMerge() {
  const root1 = new Node(100);
  root1.left        = new Node(50); 
  root1.right       = new Node(300); 
  root1.left.left   = new Node(20); 
  root1.left.right  = new Node(70);

  const root2 = new Node(80);
  root2.left        = new Node(40); 
  root2.right       = new Node(120);
  const bst = new BinarySearchTree(root1).merge(new BinarySearchTree(root2));
  bst.inorder();
}
// checkMerge();

function checkSetFromLevelOrderArray() {
  const arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  const bst = new BinarySearchTree().setFromLevelOrderArray(arr);
  bst.inorder(); 
}
// checkSetFromLevelOrderArray()

function checkgetKthSmallestElement() {
  const arr = [20, 8, 22, 4, 12, 10, 14 ];
  const bst = new BinarySearchTree().setFromLevelOrderArray(arr);
  bst.inorder();
  const node = bst.getKthSmallestElement(5);
  console.log(node, 'nodenodednode')
}
// checkgetKthSmallestElement();

function checkgetKthSmallestElementWithMorrisTraversal() {
  const bst = new BinarySearchTree().setFromLevelOrderArray([
    50, 30 , 70, 20, 40, 60 ,80
  ]);
  // console.log(bst.getKthSmallestElementWithMorrisTraversal(4), 'nnn')
  for (let k=1; k<=7; k++) {
    console.log(bst.getKthSmallestElementWithMorrisTraversal(k), k, 'nnn')
  }
}

// checkgetKthSmallestElementWithMorrisTraversal();


