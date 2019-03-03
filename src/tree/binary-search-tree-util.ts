import { BinarySearchTree } from './binary-search-tree';
import { Node, NNode } from './basic-binary-tree';
import Stack from '../stack/stack';



export class BinarySearchTreeUtil{
  /**
   * 获取两个节点的Lowest Common Ancestor
   *
   * @static
   * @param {NNode} root
   * @param {Node} node1
   * @param {Node} node2
   * @returns
   * @memberof BinarySearchTreeUtil
   */
  public static getLowesetCommonAncestor(root: NNode, node1: Node, node2: Node) {
    if (root === null) return;

    if (root.key > node1.key && root.key > node2.key) {
      return BinarySearchTreeUtil.getLowesetCommonAncestor(root.left, node1, node2);
    }
    if (root.key < node1.key && root.key < node2.key) {
      return BinarySearchTreeUtil.getLowesetCommonAncestor(root.right, node1, node2);
    }
    return root;
  }

  /**
   * 判断一个Binary Tree 是否是 BST | O(n)
   *
   * @static
   * @param {NNode} binaryTree
   * @param {number} [min=-Infinity]
   * @param {number} [max=Infinity]
   * @returns
   * @memberof BinarySearchTreeUtil
   */
  public static isBinarySearchTree(binaryTree: NNode, min: number = -Infinity, max: number = Infinity) {
    if (binaryTree === null) {
      return true;
    }

    if (binaryTree.key < min || binaryTree.key > max) {
      return false;
    }

    return BinarySearchTreeUtil.isBinarySearchTree(binaryTree.left, min, binaryTree.key) &&
      BinarySearchTreeUtil.isBinarySearchTree(binaryTree.right, binaryTree.key, max);
  }

  public static distanceFromRoot(root: Node, node: Node) {
    if (root.key === node.key) {
      return 0; 
    } else if (root.key >= node.key) {
      return 1 + BinarySearchTreeUtil.distanceFromRoot(root.left, node); 
    }
    return 1 + BinarySearchTreeUtil.distanceFromRoot(root.right, node);
  }

  // getShortestDistanceBetweenNodes
  public static distanceBetween2Util(root: NNode, node1: Node, node2: Node) {
    if (root === null) return false;
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
   * @param {NNode} root
   * @param {Node} node1
   * @param {Node} node2
   * @returns
   * @memberof BinarySearchTreeUtil
   */
  public static getShortestDistanceBetweenNodes (root: NNode, node1: Node, node2: Node) {
    return node1.key < node2.key ? BinarySearchTreeUtil.distanceBetween2Util(root, node1, node2) :
      BinarySearchTreeUtil.distanceBetween2Util(root, node2, node1);
  }

  /**
   * 给定一个和值求出一对和等于该和值的节点
   *
   * @static
   * @param {Node} root
   * @param {number} sum
   * @returns
   * @memberof BinarySearchTreeUtil
   */
  public static findPairWithGivenSumInBST(root: Node, sum: number) {
    // stack1 is for inorder traversal
    const stack1 = new Stack();
    // stack 2 is for reverse inorder traversal
    const stack2 = new Stack();

    let done1 = false, done2 = false;
    let node1 = null, node2 = null;
    let current1 = root, current2 = root;

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
            current1 = current1.right; 
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
            current2 = current2.left; 
            done2 = true; 
          } 
        } 
      }

      if (node1 && node2) {
        if (node1.key !== node2.key && node1.key + node2.key === sum) {
          return { node1: new Node(node1.key), node2: new Node(node2.key) };
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


function checkgetShortestDistanceBetweenNodes() {
  const bst = new BinarySearchTree().setFromLevelOrderArray([
    5, 2, 12, 1, 3, 9, 21, 19, 25
  ]);
  const dist = BinarySearchTreeUtil.getShortestDistanceBetweenNodes(bst.root, new Node(9), new Node(25));
  console.log(dist, 'distdist')
}

// checkgetShortestDistanceBetweenNodes();

function checkfindPairWithGivenSumInBST() {
  const root = new Node(15);
  root.left = new Node(10); 
  root.right = new Node(20); 
  root.left.left = new Node(8); 
  root.left.right = new Node(12); 
  root.right.left = new Node(16); 
  root.right.right = new Node(25);
  const result = BinarySearchTreeUtil.findPairWithGivenSumInBST(root, 26);
}

// checkfindPairWithGivenSumInBST();