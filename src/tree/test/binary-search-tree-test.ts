import { BasicTreeNode } from './../node/basic-node';
import { BinarySearchTree } from './../binary-search-tree';

export function getABinarySearchTree() {
  const bst = new BinarySearchTree(new BasicTreeNode(50));
  bst.insert(30);
  bst.insert(20); 
  bst.insert(40); 
  bst.insert(70); 
  bst.insert(60); 
  bst.insert(80);
  return bst;
}

export function checkDelete() {
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

export function checkSetFromBinaryTree() {
  const root = new BasicTreeNode(10); 
  root.left = new BasicTreeNode(30); 
  root.right = new BasicTreeNode(15); 
  root.left.left = new BasicTreeNode(20);
  root.right.right = new BasicTreeNode(5);
  const bst = new BinarySearchTree(root).setFromBinaryTree(root);
  if (bst) {
    bst.inorder();
  }
}
export function checksetFromPreorderArray() {
  const pre = [10, 5, 1, 7, 40, 50];
  const bst = new BinarySearchTree(null).setFromPreorderArray(pre);
  bst.inorder();
}

export function checkMerge() {
  const root1 = new BasicTreeNode(100);
  root1.left        = new BasicTreeNode(50); 
  root1.right       = new BasicTreeNode(300); 
  root1.left.left   = new BasicTreeNode(20); 
  root1.left.right  = new BasicTreeNode(70);

  const root2 = new BasicTreeNode(80);
  root2.left        = new BasicTreeNode(40); 
  root2.right       = new BasicTreeNode(120);
  const bst = new BinarySearchTree(root1).merge(new BinarySearchTree(root2));
  bst.inorder();
}
// checkMerge();

export function checkSetFromLevelOrderArray() {
  const arr = [7, 4, 12, 3, 6, 8, 1, 5, 10];
  const bst = new BinarySearchTree().setFromLevelOrderArray(arr);
  bst.inorder(); 
}
// checkSetFromLevelOrderArray()

export function checkgetKthSmallestElement() {
  const arr = [20, 8, 22, 4, 12, 10, 14 ];
  const bst = new BinarySearchTree().setFromLevelOrderArray(arr);
  bst.inorder();
  const node = bst.getKthSmallestElement(5);
  console.log(node, 'nodenodednode')
}
// checkgetKthSmallestElement();

export function checkgetKthSmallestElementWithMorrisTraversal() {
  const bst = new BinarySearchTree().setFromLevelOrderArray([
    50, 30 , 70, 20, 40, 60 ,80
  ]);
  console.log(bst, 'bst')
  // console.log(bst.getKthSmallestElementWithMorrisTraversal(4), 'nnn')
  for (let k=1; k<=7; k++) {
    // console.log(bst.getKthSmallestElementWithMorrisTraversal(k), k, 'nnn')
  }
}

// checkgetKthSmallestElementWithMorrisTraversal();