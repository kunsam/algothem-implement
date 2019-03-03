import { Node, NNode, BasicBinaryTree } from './basic-binary-tree';

// https://en.wikipedia.org/wiki/Threaded_binary_tree
export function MorrisTraversal(root: NNode) {
  if (root === null) return;

  let current = root;

  while(current !== null) {
    if (current.left === null) {
      console.log('current key', current.key);
      current = current.right;
    } else {

      let pre = current.left;

      while(pre.right !== null && pre.right !== current) {
        pre = pre.right;
      }

      if (pre.right === null) {
        pre.right = current;
        current = current.left;
      } else {
        pre.right = null;
        console.log('current key', current.key);
        current = current.right;
      }

    }
  }
}

function checkMorrisTraversal() {
  const root = new Node(1);
  root.left = new Node(2); 
  root.right = new Node(3); 
  root.left.left = new Node(4); 
  root.left.right = new Node(5);
  MorrisTraversal(root);
  // expect 4 2 5 1 3
  console.log(root, 'root');
}

// checkMorrisTraversal()


export function constructTreeFromInorderAndLevelorder(inorder: number[], level: number[], start: number, end: number, n: number) {
  if (n <= 0) return null;
  const node = new Node(level[0]);
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

  // console.log(index, map, 'indexindex')
  let li = 0, ri = 0;
  let lLevel = [], rLevel = [];
  for (let i=1;i<n;i++) { 
    if (map.has(level[i])) 
        lLevel[li++] = level[i];  
    else
        rLevel[ri++] = level[i];         
  }
  node.left = constructTreeFromInorderAndLevelorder(inorder, lLevel, start, index - 1, index - start);
  node.right = constructTreeFromInorderAndLevelorder(inorder, rLevel, index + 1, end, end - index);
  return node;
 }

 function checkconstructTreeFromInorderAndLevelorder() {
   const inorder = [4, 8, 10, 12, 14, 20, 22]
   const levelOrder = [20, 8, 22, 4, 12, 10, 14]
   const node = constructTreeFromInorderAndLevelorder(inorder, levelOrder, 0, levelOrder.length - 1, levelOrder.length);
   const bbt = new BasicBinaryTree(node.key);
   bbt.inorder(node);
 }

 checkconstructTreeFromInorderAndLevelorder();

 export function flipBinaryTreeRecurively(node: NNode) {
  if (node === null) return node;
  if (node.left === null && node.right === null) {
    return node;
  }
  const flippedRoot = flipBinaryTreeRecurively(node.left);
  node.left.left = node.right;
  node.left.right = node;
  node.left = null;
  node.right = null;
  return flippedRoot;
 }

 export function flipBinaryTreeIteratively(node: NNode) {
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