
import { cloneDeep } from 'lodash';
import Stack from '../stack/stack';
import Queue from '../queue/queue';
import { BinarySearchTree } from './binary-search-tree';
import { RangeNode, NRangeNode } from './node/range-node';
import { BasicTreeNode, NBasicTreeNode, VisitNodeFunction, } from './node/basic-node';
import { GlobalNodeDirtyFlows , NodeDirtyType} from './../view/tree/global-node-dirty-flows';


export class BinarySearchTreeConstructUtil{

  public static fromSortedArray(array: number[], start: number = 0, end: number = array.length - 1) {
    if (start > end) return null;
    const mid = Math.round((start + end)  / 2);
    const root = new BasicTreeNode(array[mid]);

    GlobalNodeDirtyFlows.addToDirtyFlows([
      { node: root, dirtyType: NodeDirtyType.visited }
    ], 'BinarySearchTreeUtil.sortedArrayToBST');

    root.left = BinarySearchTreeConstructUtil.fromSortedArray(array, start, mid - 1);
    root.right = BinarySearchTreeConstructUtil.fromSortedArray(array, mid + 1, end);
    return root;
  }

  public static fromBinaryTree(binaryTreeRoot: NBasicTreeNode): NBasicTreeNode {
    if (binaryTreeRoot === null) return binaryTreeRoot;
    function setFromInorderArrayUtil (inorderArray: number[], root: NBasicTreeNode, indexObj: any = { index: 0 }) {
      if (root === null) return null;
      setFromInorderArrayUtil(inorderArray, root.left, indexObj);
      root.key = inorderArray[indexObj.index++] ;
      setFromInorderArrayUtil(inorderArray, root.right, indexObj);
      return root;
    }
    const inorder = BinarySearchTreeUtil.transformUtil().toInorderArray(binaryTreeRoot, []).sort((a, b) => a - b);
    setFromInorderArrayUtil(inorder, binaryTreeRoot, { index: 0 });
    return binaryTreeRoot;
  }

  public static fromPreorderArray(preorderArray: number[], indexObj: any = { index: 0 }, min: number = -Infinity, max: number = Infinity) {
    if (indexObj.index >= preorderArray.length) {
      return null;
    }
    let root = null;
    const key = preorderArray[indexObj.index];
    if (key > min && key < max) {
      root = new BasicTreeNode(key);
      indexObj.index++;
      if (indexObj.index < preorderArray.length) {
        root.left = BinarySearchTreeConstructUtil.fromPreorderArray(preorderArray, indexObj, min, key);
        root.right = BinarySearchTreeConstructUtil.fromPreorderArray(preorderArray, indexObj, key, max);
      }
    }
    return root;
  }

  public static fromLevelOrderArray(array: number[]): NRangeNode {
    if (array.length === 0) {
      return null;
    }
    let i = 0;
    const newNode = new RangeNode(array[i++]);
    const queue = new Queue();
    queue.push(newNode);
    while(i !== array.length) {
      const temp = queue.pop() as RangeNode;
      if (i < array.length && (array[i] < temp.key && array[i] > temp.min)) {
        const cnewNode = new RangeNode(array[i++], temp.min, temp.key);
        queue.push(cnewNode);
        temp.left = cnewNode;
      }
      if (i < array.length && (array[i] > temp.key && array[i] < temp.max)) {
        const cnewNode = new RangeNode(array[i++], temp.key, temp.max);
        queue.push(cnewNode);
        temp.right = cnewNode;
      }
    }
    return newNode;
  }
}



export class BinarySearchTreeTransformUtil{
  public static toInorderArray(root: NBasicTreeNode, inorder: number[] = []) {
    if (root === null) return inorder;
    inorder = BinarySearchTreeTransformUtil.toInorderArray(root.left, inorder);
    inorder.push(root.key);
    inorder = BinarySearchTreeTransformUtil.toInorderArray(root.right, inorder);
    return inorder;
  }

  public static rotateLeft(props: { node: BasicTreeNode, root: NBasicTreeNode }) {
    // 1. update node right and its relationship
    // 2. update node right parent and its relationship
    // 3. update node parent and its relationship
    const { node } = props;
    if (!node.right) {
      GlobalNodeDirtyFlows.addToDirtyFlows([{
        node: null,
        dirtyType: NodeDirtyType.showMessage,
        data: { text: 'null parent', messageType: 'error' }
      }]);
      return;
    }
    let right = node.right; 
    node.right = right && right.left || null;
    if (node.parent === null) {
      props.root = right; 
    } else if (node === node.parent.left) {
      node.parent.left = right; 
    } else {
      node.parent.right = right; 
    }
    if (right) {
      right.left = node; 
    }

    GlobalNodeDirtyFlows.addToDirtyFlows([{
      node: cloneDeep(node),
      dirtyType: NodeDirtyType.leftRotated,
    }]);

  }


  public static rotateRight(props: { node: BasicTreeNode, root: NBasicTreeNode }) {
    const { node } = props;
    if (!node.left) {
      GlobalNodeDirtyFlows.addToDirtyFlows([{
        node: null,
        dirtyType: NodeDirtyType.showMessage,
        data: { text: 'null parent', messageType: 'error' }
      }]);
      return;
    }

    let left = node.left; 
    node.left = left && left.right || null;
    if (node.parent === null) {
      props.root = left; 
    } else if (node === node.parent.left) {
      node.parent.left = left; 
    } else {
      node.parent.right = left;
    }
    if (left) {
      left.right = node; 
    }
    GlobalNodeDirtyFlows.addToDirtyFlows([{
      node: cloneDeep(node),
      dirtyType: NodeDirtyType.rightRotated,
    }]);
  }
}





export class BinarySearchTreeUtil{

  public static constructUtil() {
    return BinarySearchTreeConstructUtil;
  }

  public static transformUtil() {
    return BinarySearchTreeTransformUtil;
  }

  // ATTENTION: 传一个root实例进来用递归的方式无法更新 调用环境的实例对象
  public static insert(props: { key: number, root: NBasicTreeNode, consturctNode?: (key: number) => BasicTreeNode }) {
    const { key, root, consturctNode } = props;
    const addNode = (key: number) => {
      const node = consturctNode ? consturctNode(key) : new BasicTreeNode(key);
      return node;
    }
    const addToFlows = (node: BasicTreeNode) => {
      GlobalNodeDirtyFlows.addToDirtyFlows([
        { node: cloneDeep(node), dirtyType: NodeDirtyType.added, }
      ], 'BinarySearchTreeUtil.insert');
    }
    
    if (root === null) {
      props.root = addNode(key);
      addToFlows(props.root);
      return;
    }
    const queue = new Queue();
    queue.push(root);
    while(!queue.empty()) {
      let temp: BasicTreeNode = queue.pop();
      if (key > temp.key) {
        GlobalNodeDirtyFlows.addToDirtyFlows([
          { node: cloneDeep(temp), dirtyType: NodeDirtyType.visited }
        ], 'BinarySearchTreeUtil.insert');
        if (temp.right) {
          queue.push(temp.right);
        } else {
          temp.right = addNode(key);
          // 要等更新完才行
          addToFlows(temp.right);
        }
      }
      if (key < temp.key) {
        GlobalNodeDirtyFlows.addToDirtyFlows([
          { node: cloneDeep(temp), dirtyType: NodeDirtyType.visited }
        ], 'BinarySearchTreeUtil.insert');
        if (temp.left) {
          queue.push(temp.left);
        } else {
          temp.left = addNode(key);
          addToFlows(temp.left);
        }
      }
    }
    props.root = root;
  }

  public static delete(key: number, root: NBasicTreeNode): NBasicTreeNode {
    if (root === null) {
      return root;
    }

    if (key < root.key) {
      GlobalNodeDirtyFlows.addToDirtyFlows([
        { node: root, dirtyType: NodeDirtyType.visited }
      ], 'BinarySearchTreeUtil.delete');

      root.left = BinarySearchTreeUtil.delete(key, root.left);
    } else if (key > root.key) {
    
      GlobalNodeDirtyFlows.addToDirtyFlows([
        { node: root, dirtyType: NodeDirtyType.visited }
      ], 'BinarySearchTreeUtil.delete');
    
      root.right = BinarySearchTreeUtil.delete(key, root.right);
    } else {
      if (root.left === null) {
        return root.right;
      } else if (root.right === null) {
        return root.left;
      }
      // node with two children: Get the inorder successor
      const minValueNode = BinarySearchTreeUtil.minValueNode(root.right);
      if (minValueNode) {
        GlobalNodeDirtyFlows.addToDirtyFlows([
          {
            node: cloneDeep(root),
            dirtyType: NodeDirtyType.showText,
            data: { text: 'inorder successor' }
          }
        ], 'BinarySearchTreeUtil.delete');
        root.key = minValueNode.key;
        root.right = BinarySearchTreeUtil.delete(minValueNode.key, root.right);
      }
    }
    return root;
  }

  public static search(key: number, root: NBasicTreeNode, addToFlow?: boolean): NBasicTreeNode {
    if (root === null) {
      return null;
    }
    if (key === root.key) {
      return root;
    }
    if (addToFlow) {
      GlobalNodeDirtyFlows.addToDirtyFlows([
        { node: cloneDeep(root), dirtyType: NodeDirtyType.visited }
      ], 'BinarySearchTreeUtil.search');
    }
    if (key > root.key) {
      return this.search(key, root.right);
    }
    return this.search(key, root.left);
  }

  public static searchIteratively(key: number, root: NBasicTreeNode, addToFlow?: boolean): NBasicTreeNode {
    if (root === null) return null;
    let temp: NBasicTreeNode = root;
    while(temp) {
      if (key < temp.key) {
        if (temp.left === null) {
          break;
        } else {
          if (addToFlow) {
            GlobalNodeDirtyFlows.addToDirtyFlows([
              { node: cloneDeep(temp), dirtyType: NodeDirtyType.visited }
            ], 'BinarySearchTreeUtil.searchIteratively');
          }
          temp = temp.left;
        }
      } else if (key > temp.key) {
        if (temp.right === null) {
          break;
        } else {
          if (addToFlow) {
            GlobalNodeDirtyFlows.addToDirtyFlows([
              { node: cloneDeep(temp), dirtyType: NodeDirtyType.visited }
            ], 'BinarySearchTreeUtil.searchIteratively');
          }
          temp = temp.right;
        }
      } else {
        break;
      }
    }
    if (temp.key !== key) {
      return null;
    }
    return temp;
  }

  public static getMaxDepthRecursion(node: NBasicTreeNode): { node: NBasicTreeNode, depth: number } {
    if (node === null) {
      return {
        node,
        depth: 0,
      }
    }
    const leftDepth = BinarySearchTreeUtil.getMaxDepthRecursion(node.left);
    const rightDepth = BinarySearchTreeUtil.getMaxDepthRecursion(node.right);
    if (leftDepth.depth > rightDepth.depth) {
      return {
        depth: leftDepth.depth + 1,
        node: leftDepth.node || node,
      }
    } else {
      return {
        depth: rightDepth.depth + 1,
        node: rightDepth.node || node,
      }
    }
  }

  /**
   * 中序遍历
   *
   * @static
   * @param {NBasicTreeNode} root
   * @param {VisitNodeFunction} callBack
   * @memberof BinarySearchTreeUtil
   */
  public static inorderTraverse(root: NBasicTreeNode, callBack: VisitNodeFunction) { 
    if (root !== null) {
      GlobalNodeDirtyFlows.addToDirtyFlows([
        { node: root, dirtyType: NodeDirtyType.visited }
      ], 'BinarySearchTreeUtil.inorderTraverse');
      BinarySearchTreeUtil.inorderTraverse(root.left, callBack);
      const isStop = !!callBack(root);
      if (isStop) return;
      BinarySearchTreeUtil.inorderTraverse(root.right, callBack);
    } 
  }

  public static levelOrderTraverse(root: NBasicTreeNode, callback: VisitNodeFunction) {
    if (root === null) return;
    const queue = new Queue();
    queue.push(root);
    // console.time('levelOrderTraverse')
    while (!queue.empty()) {
      const temp: BasicTreeNode = queue.pop();
      GlobalNodeDirtyFlows.addToDirtyFlows([
        { node: cloneDeep(temp), dirtyType: NodeDirtyType.visited }
      ], 'BinarySearchTreeUtil.levelOrderTraverse');
      callback(temp);
      if (temp.left !== null) {
        queue.push(temp.left);
      }
      if (temp.right !== null) {
        queue.push(temp.right); 
      }
    }
    console.timeEnd('levelOrderTraverse')
  }

  public static minValueNode(node: NBasicTreeNode) {
    let current: NBasicTreeNode = node;
    while(current && current.left !== null) {
      GlobalNodeDirtyFlows.addToDirtyFlows([
        { node: current, dirtyType: NodeDirtyType.visited }
      ], 'BinarySearchTreeUtil.minValueNode');
      current = current.left;
    }
    return current;
  }

  public static countNodes(root: NBasicTreeNode): number {
    if (root === null) return 0;
    return BinarySearchTreeUtil.countNodes(root.left) + BinarySearchTreeUtil.countNodes(root.right) + 1;
  }


  /**
   * 获取两个节点的Lowest Common Ancestor
   *
   * @static
   * @param {NBasicTreeNode} root
   * @param {BasicTreeNode} node1
   * @param {BasicTreeNode} node2
   * @returns {NBasicTreeNode}
   * @memberof BinarySearchTreeUtil
   */
  public static getLowesetCommonAncestor(root: NBasicTreeNode, node1: BasicTreeNode, node2: BasicTreeNode): NNode {
    if (root === null) {
      return null;
    }
    if (root.key > node1.key && root.key > node2.key) {
      return BinarySearchTreeUtil.getLowesetCommonAncestor(root.left, node1, node2);
    }
    if (root.key < node1.key && root.key < node2.key) {
      return BinarySearchTreeUtil.getLowesetCommonAncestor(root.right, node1, node2);
    }
    return root;
  }

  /**
   * 获得第K个最小的元素 | O(n)
   * Node 中加入一个 lCount: number 可使时间复杂度降低到 O(h);
   * @param {number} k
   * @returns
   * @memberof BinarySearchTreeUtil
  */
  public static getKthSmallestElement(k: number, root: NBasicTreeNode) {
    const stack = new Stack();
    let current = root;
    while( current ) {
      stack.push(current);
      current = current.left;
    }
    while(current = stack.pop()) {
      if (!--k) break;
      // find inorder successor
      if (current.right) {
        current = current.right;
        while( current ) {
          stack.push(current);
          current = current.left;
        }
      }
    }
    return current;
  }

  /**
   * use morris traversal base on https://en.wikipedia.org/wiki/Threaded_binary_tree;
   * Merit: don't use recursion or stack and use O(1) Extra Space
   * @param {number} k
   * @returns
   * @memberof BinarySearchTreeUtil
  */
  public static getKthSmallestElementWithMorrisTraversal(k: number, root: NBasicTreeNode) {
    let count = 0;
    let current = root;
    let kthSmall: NBasicTreeNode = null;;

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

  /**
   * 判断一个Binary Tree 是否是 BST | O(n)
   *
   * @static
   * @param {NBasicTreeNode} binaryTree
   * @param {number} [min=-Infinity]
   * @param {number} [max=Infinity]
   * @returns
   * @memberof BinarySearchTreeUtil
   */
  public static isBinarySearchTree(binaryTree: NBasicTreeNode, min: number = -Infinity, max: number = Infinity): boolean {
    if (binaryTree === null) {
      return true;
    }

    if (binaryTree.key < min || binaryTree.key > max) {
      return false;
    }

    return BinarySearchTreeUtil.isBinarySearchTree(binaryTree.left, min, binaryTree.key) &&
      BinarySearchTreeUtil.isBinarySearchTree(binaryTree.right, binaryTree.key, max);
  }

  public static distanceFromRoot(root: BasicTreeNode, node: BasicTreeNode): number {
    if (root.key === node.key) {
      return 0; 
    } else if (root.key > node.key) {
      if (root.left) {
        return 1 + BinarySearchTreeUtil.distanceFromRoot(root.left, node); 
      }
      return 0;
    }
    if (root.right) {
      return 1 + BinarySearchTreeUtil.distanceFromRoot(root.right, node);
    }
    return 0;
  }

  // getShortestDistanceBetweenNodes
  public static distanceBetween2Util(root: NBasicTreeNode, node1: BasicTreeNode, node2: BasicTreeNode): number {
    if (root === null) return 0;
    if (root.key > node1.key && root.key > node2.key) {
      return BinarySearchTreeUtil.distanceBetween2Util(root.left, node1, node2);
    }

    if (root.key < node1.key && root.key < node2.key) {
      return BinarySearchTreeUtil.distanceBetween2Util(root.right, node1, node2);
    }

    if (root.key >= node1.key && root.key <= node2.key) {
      return BinarySearchTreeUtil.distanceFromRoot(root, node1) +
        BinarySearchTreeUtil.distanceFromRoot(root, node2);
    }
  }
  /**
   * 获得两个节点的距离
   *
   * @static
   * @param {NBasicTreeNode} root
   * @param {BasicTreeNode} node1
   * @param {BasicTreeNode} node2
   * @returns
   * @memberof BinarySearchTreeUtil
   */
  public static getShortestDistanceBetweenNodes (root: NBasicTreeNode, node1: BasicTreeNode, node2: BasicTreeNode) {
    return node1.key < node2.key ? BinarySearchTreeUtil.distanceBetween2Util(root, node1, node2) :
      BinarySearchTreeUtil.distanceBetween2Util(root, node2, node1);
  }

  /**
   * 给定一个和值求出一对和等于该和值的节点
   *
   * @static
   * @param {BasicTreeNode} root
   * @param {number} sum
   * @returns
   * @memberof BinarySearchTreeUtil
   */
  public static findPairWithGivenSumInBST(root: BasicTreeNode, sum: number) {
    // stack1 is for inorder traversal
    const stack1 = new Stack();
    // stack 2 is for reverse inorder traversal
    const stack2 = new Stack();
    let done1 = false, done2 = false;
    let node1 = null, node2 = null;
    let current1: NBasicTreeNode = root, current2: NBasicTreeNode = root;
    while(1) {
  
      while (!done1) {
        if (current1 !== null) { 
          stack1.push(current1); 
          current1 = current1.left; 
        } else { 
          if (stack1.empty()) {
            done1 = true;
          } else { 
            current1 = stack1.pop(); 
            node1 = current1; 
            current1 = current1!.right; 
            done1 = true; 
          } 
        } 
      }

      while (!done2) {
        if (current2 !== null) { 
          stack2.push(current2); 
          current2 = current2.right; 
        } else { 
          if (stack2.empty()) {
            done2 = true;
          } else { 
            current2 = stack2.pop(); 
            node2 = current2; 
            current2 = current2!.left; 
            done2 = true; 
          } 
        } 
      }

      if (node1 && node2) {
        if (node1.key !== node2.key && node1.key + node2.key === sum) {
          return { node1: new BasicTreeNode(node1.key), node2: new BasicTreeNode(node2.key) };
        } else if (node1.key + node2.key > sum) {
          done2 = false;
        } else if (node1.key + node2.key < sum) {
          done1 = false;
        }

        if (node1.key > node2.key) {
          return { node1: null, node2: null };
        }
      }

    }
  }



}


export function checkgetShortestDistanceBetweenNodes() {
  const bst = new BinarySearchTree().setFromLevelOrderArray([
    5, 2, 12, 1, 3, 9, 21, 19, 25
  ]);
  const dist = BinarySearchTreeUtil.getShortestDistanceBetweenNodes(bst.root, new BasicTreeNode(9), new BasicTreeNode(25));
  console.log(dist, 'distdist')
}

// checkgetShortestDistanceBetweenNodes();

export function checkfindPairWithGivenSumInBST() {
  const root = new BasicTreeNode(15);
  root.left = new BasicTreeNode(10); 
  root.right = new BasicTreeNode(20); 
  root.left.left = new BasicTreeNode(8); 
  root.left.right = new BasicTreeNode(12); 
  root.right.left = new BasicTreeNode(16); 
  root.right.right = new BasicTreeNode(25);
  // const result = BinarySearchTreeUtil.findPairWithGivenSumInBST(root, 26);
}

// checkfindPairWithGivenSumInBST();