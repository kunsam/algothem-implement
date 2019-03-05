import { cloneDeep } from 'lodash';
import Queue from '../queue/queue';
import { BasicBinaryTree } from './basic-binary-tree';
import { NodeDataPair, NodeDirtyType, GlobalNodeDirtyFlows } from './../view/tree/global-node-dirty-flows';
import { 
  BasicTreeNode,
  NBasicTreeNode,
  VisitNodeFunction,
} from './node/basic-node';


export default class BasicBinaryTreeUtil {
  /**
   *
   * 基本插入
   * @static
   * @param {number} key
   * @param {Node} root
   * @param {boolean} [saveDirtyFlows]
   * @returns
   * @memberof BasicBinaryTreeUtil
   */
  public static insert(key: number, root: NBasicTreeNode, saveDirtyFlows?: boolean) {
    if (root === null) {
      return new BasicTreeNode(key);
    }
    const queue = new Queue();
    queue.push(root); 
    let temp: BasicTreeNode;
    const flow: NodeDataPair[] = [];
    while (!queue.empty()) {
      temp = queue.pop();
      if (!temp.left) {
        temp.left = new BasicTreeNode(key);
        saveDirtyFlows && flow.push({ node: temp.left, data: { type: NodeDirtyType.added } });
        break;
      } else {
        queue.push(temp.left);
        saveDirtyFlows && flow.push({ node: temp, data: { type: NodeDirtyType.visited } });
      }
      if (!temp.right) {
          temp.right = new BasicTreeNode(key);
          saveDirtyFlows && flow.push({ node: temp.right, data: { type: NodeDirtyType.added } });
          break;
      } else {
        queue.push(temp.right);
        saveDirtyFlows && flow.push({ node: temp, data: { type: NodeDirtyType.visited } });
      }
    }
    if (saveDirtyFlows) {
      GlobalNodeDirtyFlows.dirtyFlows.push({
        flow,
        flowInfo: { name: 'BasicBinaryTreeUtil.insert' }
      });
    }
    return root;
  }

  // https://www.geeksforgeeks.org/deletion-binary-tree/
  public static delete(key: number, root: NBasicTreeNode) {
    if (root === null) return root;
    const queue = new Queue();
    queue.push(root);
    let temp: NBasicTreeNode = null;
    while (!queue.empty() && (!temp || temp.key !== key)) { 
      temp = queue.pop();
      if (temp) {
        if (temp.left) queue.push(temp.left); 
        if (temp.right) queue.push(temp.right);
      }
    }
    if (temp) {
      temp.left = null;
      temp.left = null;
    }
    return root;
  }


  // https://en.wikipedia.org/wiki/Threaded_binary_tree
  /**
   * morris 遍历
   *
   * @static
   * @param {NBasicTreeNode} root
   * @param {VisitNodeFunction} callBack
   * @param {boolean} [saveDirtyFlows]
   * @returns
   * @memberof BasicBinaryTreeUtil
   */
  public static morrisTraversal(root: NBasicTreeNode, callBack: VisitNodeFunction, saveDirtyFlows?: boolean) {
    if (root === null) {
      return;
    }
    let current: NBasicTreeNode = root;
    const addToVisitFlows = (node: BasicTreeNode) => {
      if (saveDirtyFlows) {
        GlobalNodeDirtyFlows.dirtyFlows.push({
          flow: [{ node: cloneDeep(node), data: { type: NodeDirtyType.visited } }],
          flowInfo: { name: 'morrisTraversal.visit' }
        });
      }
    }
    
    let isStop = false;
    while(current !== null && !isStop) {
      if (current.left === null) {
        isStop = !!callBack(current);
        addToVisitFlows(current);
        current = current.right;
      } else {
        let pre: NBasicTreeNode = current.left;
        const flow: NodeDataPair[] = [];
        while(pre.right !== null && pre.right !== current) {
          // find predecessor
          saveDirtyFlows && flow.push({ node: cloneDeep(pre), data: { type: NodeDirtyType.visited } });
          pre = pre.right;
        }
        if (saveDirtyFlows) {
          GlobalNodeDirtyFlows.dirtyFlows.push({
            flow,
            flowInfo: { name: 'morrisTraversal.findpredecessor', node: cloneDeep(current) }
          });
        }

        if (pre.right === null) {
          pre.right = current;
          addToVisitFlows(current);
          current = current.left;
        } else {
          pre.right = null;
          isStop = !!callBack(current);
          addToVisitFlows(current);
          current = current.right;
        }
      }
    }
  }

  /**
   * 以 inorder 和 level 数组构造 binaryTree
   *
   * @static
   * @param {number[]} inorder
   * @param {number[]} level
   * @param {number} start
   * @param {number} end
   * @param {number} n
   * @returns
   * @memberof BasicBinaryTreeUtil
   */
  public static constructTreeFromInorderAndLevelorder(inorder: number[], level: number[], start: number, end: number, n: number) {
    if (n <= 0) return null;
    const root = new BasicTreeNode(level[0]);
    let index = 0;
    for (let i = start; i <= end; i++) {
      if (inorder[i] === level[0]) {
        index = i;
        break;
      }
    }
    const map = new Map();
    for (let i = start; i < index; i++) {
      map.set(inorder[i], true);
    }
    let li = 0, ri = 0;
    let lLevel = [], rLevel = [];
    for (let i=1;i<n;i++) { 
      if (map.has(level[i])) 
        lLevel[li++] = level[i];  
      else
        rLevel[ri++] = level[i];         
    }
    root.left = BasicBinaryTreeUtil.constructTreeFromInorderAndLevelorder(inorder, lLevel, start, index - 1, index - start);
    root.right = BasicBinaryTreeUtil.constructTreeFromInorderAndLevelorder(inorder, rLevel, index + 1, end, end - index);
    return root;
   }

   // https://www.geeksforgeeks.org/flip-binary-tree/
   /**
    * left most -> root
    * left most parent -> its right child
    * the right sibling of root -> its right child's left child
    * 递归型 Flip
    * @static
    * @param {NBasicTreeNode} node
    * @returns {NBasicTreeNode}
    * @memberof BasicBinaryTreeUtil
    */
   public static flipBinaryTreeRecurively(node: NBasicTreeNode): NBasicTreeNode {
    if (node === null) return node;
    if (node.left === null && node.right === null) {
      return node;
    }
    const flippedRoot = BasicBinaryTreeUtil.flipBinaryTreeRecurively(node.left);
    if(node.left) {
      // if use node.left.dirty is fine
      GlobalNodeDirtyFlows.startSequence();
      node.left.left = node.right;
      node.left.right = node;
    }
    node.left = null;
    node.right = null;
    GlobalNodeDirtyFlows.endSequence('flipBinaryTreeRecurively');
    return flippedRoot;
   }

   public static flipBinaryTreeIteratively(node: NBasicTreeNode) {
    let current = node;
    let next = null;
    let temp = null;
    let prev = null;
    while(current) {
      next = current.left;
      // Making prev's right as curr's left child 
      current.left = temp;
      // Storing curr's right child 
      temp = current.right;
      // Making prev as curr's right child 
      current.right = prev;
      prev = current;
      current = next;
    }
   }
}


export function checkMorrisTraversal() {
  const root = new BasicTreeNode(1);
  root.left = new BasicTreeNode(2); 
  root.right = new BasicTreeNode(3); 
  root.left.left = new BasicTreeNode(4); 
  root.left.right = new BasicTreeNode(5);
  BasicBinaryTreeUtil.morrisTraversal(root, (node) => {
    console.log('node:', node.key);
  });
  // expect 4 2 5 1 3
}






 export function checkconstructTreeFromInorderAndLevelorder() {
   const inorder = [4, 8, 10, 12, 14, 20, 22]
   const levelOrder = [20, 8, 22, 4, 12, 10, 14]
   const root = BasicBinaryTreeUtil.constructTreeFromInorderAndLevelorder(inorder, levelOrder, 0, levelOrder.length - 1, levelOrder.length);
   const bbt = new BasicBinaryTree(root);
   bbt.inorder(root);
 }

//  checkconstructTreeFromInorderAndLevelorder();



 