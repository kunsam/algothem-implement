import { NBasicTreeNode } from "./node/basic-node";
import { BasicBinaryTree } from "./basic-binary-tree";
import { BinarySearchTreeUtil } from "./binary-search-tree-util";
import MergeSort from "../array/sort/merge-sort";

export class BinarySearchTree extends BasicBinaryTree {
  constructor(root?: NBasicTreeNode) {
    super(root);
  }

  public insert(key: number) {
    const props = { key, root: this.root };
    BinarySearchTreeUtil.insert(props);
    this.root = props.root;
  }

  public delete(key: number) {
    this.root = BinarySearchTreeUtil.delete(key, this.root);
  }

  public search(key: number, addToFlow?: boolean) {
    const props = { key, root: this.root, addToFlow };
    return BinarySearchTreeUtil.search(props);
  }

  public inorder() {
    return BinarySearchTreeUtil.inorderTraverse(this.root, node => {
      console.log("node key:", node.key);
      return undefined;
    });
  }

  public minValueNode() {
    return BinarySearchTreeUtil.minValueNode(this.root);
  }

  public setFromBinaryTree(root: NBasicTreeNode) {
    this.root = BinarySearchTreeUtil.constructUtil().fromBinaryTree(root);
    return this;
  }

  public setFromInorderArray(inorderArray: number[]) {
    this.root = BinarySearchTreeUtil.constructUtil().fromSortedArray(
      inorderArray
    );
    return this;
  }

  public setFromPreorderArray(preorderArray: number[]) {
    this.root = BinarySearchTreeUtil.constructUtil().fromPreorderArray(
      preorderArray
    );
    return this;
  }

  public setFromLevelOrderArray(array: number[]) {
    this.root = BinarySearchTreeUtil.constructUtil().fromLevelOrderArray(array);
    return this;
  }

  public merge(binaryST: BinarySearchTree) {
    const toInorder = (node: NBasicTreeNode) =>
      BinarySearchTreeUtil.transformUtil().toInorderArray(node);
    const thisOrderArray = toInorder(this.root);
    const anotherBSTOrderArray = toInorder(binaryST.root);
    // MergeSortWithArray(thisOrderArray, anotherBSTOrderArray);
    // 合并排序
    const mergedArray = thisOrderArray.concat(anotherBSTOrderArray);
    MergeSort.sort(mergedArray);
    this.root = BinarySearchTreeUtil.constructUtil().fromSortedArray(
      mergedArray
    );
    return this;
  }

  public getKthSmallestElement(k: number) {
    return BinarySearchTreeUtil.getKthSmallestElement(k, this.root);
    // or user getKthSmallestElementWithMorrisTraversal
    // return BinarySearchTreeUtil.getKthSmallestElementWithMorrisTraversal(k, this.root);
  }

  public getMaxDepthNode(): { node: NBasicTreeNode; depth: number } {
    return BinarySearchTreeUtil.getMaxDepthRecursion(this.root);
  }
}
