import { BasicBinaryTree } from './../basic-binary-tree';
import { BasicTreeNode } from '../node/basic-node';

export default class GetMockBinaryTree {
  public static mock1() {
    const root = new BasicTreeNode(66);
    root.right = new BasicTreeNode(100);
    const bst = new BasicBinaryTree(root);
    return bst;
  }

  public static mock2() {
    const root = new BasicTreeNode(66);
    root.right = new BasicTreeNode(100);
    root.right.left = new BasicTreeNode(80);
    const bst = new BasicBinaryTree(root);
    return bst;
  }

  public static mock3() {
    const root = new BasicTreeNode(66);
    root.left = new BasicTreeNode(1);
    root.right = new BasicTreeNode(120);
    root.right.left = new BasicTreeNode(100);
    root.right.right = new BasicTreeNode(200);
    const bst = new BasicBinaryTree(root);
    // bst
    return bst;
  }

  public static mock4() {
    const root = new BasicTreeNode(66);
    root.left = new BasicTreeNode(1);
    root.right = new BasicTreeNode(200);
    root.right.left = new BasicTreeNode(140);
    root.right.right = new BasicTreeNode(220);
    root.right.right.left = new BasicTreeNode(210);
    root.right.right.right = new BasicTreeNode(300);
    const bst = new BasicBinaryTree(root);
    // bst
    return bst;
  }

  public static rightrotate_mock1() {
    const root = new BasicTreeNode(66);
    root.left = new BasicTreeNode(5);
    const bst = new BasicBinaryTree(root);
    return bst;
  }

  public static rightrotate_mock2() {
    const root = new BasicTreeNode(66);
    root.left = new BasicTreeNode(5);
    root.left.right = new BasicTreeNode(12);
    const bst = new BasicBinaryTree(root);
    return bst;
  }

  public static rightrotate_mock3() {
    const root = new BasicTreeNode(66);
    root.right = new BasicTreeNode(200);
    root.left = new BasicTreeNode(50);
    root.left.left = new BasicTreeNode(10);
    root.left.right = new BasicTreeNode(70);
    const bst = new BasicBinaryTree(root);
    return bst;
  }

  public static rightrotate_mock4() {
    const root = new BasicTreeNode(66);
    root.right = new BasicTreeNode(188);
    root.left = new BasicTreeNode(40);
    root.left.left = new BasicTreeNode(30);
    root.left.left.left = new BasicTreeNode(42);
    root.left.left.right = new BasicTreeNode(44);
    root.left.right = new BasicTreeNode(70);
    const bst = new BasicBinaryTree(root);
    return bst;
  }

  public static getLeftRotateMock(): BasicBinaryTree[] {
    return [
      GetMockBinaryTree.mock1(),
      GetMockBinaryTree.mock2(),
      GetMockBinaryTree.mock3(),
      GetMockBinaryTree.mock4(),
    ]
  }


  public static getRightRotateMock(): BasicBinaryTree[] {
    return [
      GetMockBinaryTree.rightrotate_mock1(),
      GetMockBinaryTree.rightrotate_mock2(),
      GetMockBinaryTree.rightrotate_mock3(),
      GetMockBinaryTree.rightrotate_mock4(),
    ]
  }

}

