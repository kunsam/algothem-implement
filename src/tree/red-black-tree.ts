import { cloneDeep } from 'lodash';
import { Node } from './basic-binary-tree';
import { TraversalHelper } from "../util/traversal-helper";
import { RBNodeDirtyType } from '../view/tree/red-black-tree-viewobject';
 
export enum RBColor {
  red = 1,
  black = 2,
}

export type NRBNode = RBNode | null;

// visualization: https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
export class RBNode extends Node {
  public parent: NRBNode;
  public left: NRBNode;
  public right: NRBNode;
  public color: RBColor = RBColor.red;
  public userData: any = {};
  constructor(key: number) {
    super(key);
    this.left = this.right = this.parent = null;
  }
  public uncle(): NRBNode {
    if (this.parent === null || this.parent.parent === null) {
      return null;
    }
    return this.parent.isOnLeft() ? this.parent.parent.right : this.parent.parent.left;
  }
  public sibling(): NRBNode {
    if (this.parent === null) {
      return null;
    }
    return this.isOnLeft() ? this.parent.right : this.parent.left;
  }
  public leftmost(): RBNode {
    let temp: RBNode = this;
    while(temp.left) {
      temp = temp.left;
    }
    return temp;
  }

  public rightmost(): RBNode {
    let temp: RBNode = this;
    while(temp.right) {
      temp = temp.right;
    }
    return temp;
  }

  public isOnLeft(): boolean {
    if (this.parent === null) {
      return false;
    }
    return this === this.parent.left;
  }

  public hasChild() {
    return (this.left !== null || this.right !== null)
  }
  public hasOneChild() {
    return (this.left !== null && this.right === null) ||
      (this.right !== null && this.left === null);
  }
  public hasTwoChild() {
    return (this.left !== null && this.right !== null)
  }

  public hasRedChild() {
    return (this.left !== null && this.left.color === RBColor.red) ||
      (this.right !== null && this.right.color === RBColor.red);
  }
  public moveDownWithNewParent(nParent: RBNode) {
    if (this.parent) {
      if (this.isOnLeft()) {
        this.parent.left = nParent;
      } else {
        this.parent.right = nParent;
      }
    }
    nParent.parent = this.parent;
    this.parent = nParent;
  }
}

export interface RBNodeDirtyInfo{
  data?: any;
  node: NRBNode;
  dirtyType: RBNodeDirtyType;
}

// 还可以实现的操作包括 join / union / difference
export class RedBlackTree {
  public root: NRBNode;
  public dirtyFlows: RBNodeDirtyInfo[][] = [];
  private _traversalHelper: TraversalHelper;

  constructor() {
    this.root = null;
    this._traversalHelper = new TraversalHelper();
  }

  public inorder() {
    this._traversalHelper.inorder(this.root);
  }

  public inorderTraverse(callback: Function) {
    this._traversalHelper.inorderTraverse(this.root, callback);
  }

  public levelOrder() {
    this._traversalHelper.levelOrder(this.root);
  }

  public levelOrderTraverse(callback: Function) {
    this._traversalHelper.levelOrderTraverse(this.root, callback);
  }

  private _swapColor(node1: NRBNode, node2: NRBNode) {
    if (node1 === null || node2 === null) {
      return;
    }
    const temp = node1.color;
    node1.color = node2.color;
    node2.color = temp;
  }

  private _swapKey(node1: RBNode, node2: RBNode) {
    if (node1 === null || node2 === null) {
      return;
    }
    const temp = node1.key;
    node1.key = node2.key;
    node2.key = temp;
  }

  public insert(key: number, afterBSTInsert?: (r: RBNode) => void) {
    this.dirtyFlows = [];
    const node = new RBNode(key);
    this.root = this._BSTInsert(this.root, node);
    if (afterBSTInsert) {
      afterBSTInsert(node); // for animation
    }
    this._fix2RedBlack(node);
    return this.dirtyFlows;
  }

  public rotateLeft(root: NRBNode, node: RBNode) {
    let right = node.right; 
    node.right = right && right.left || null; 
    if (node.right) {
      node.right.parent = node;
    }
    if (right) {
      right.parent = node.parent; 
    }
    if (node.parent === null) {
      root = right; 
    } else if (node === node.parent.left) {
      node.parent.left = right; 
    } else {
      node.parent.right = right; 
    }
    if (right) {
      right.left = node; 
    }
    node.parent = right;
    return root;
  }

  private _rotateLeft(node: RBNode) {
    // 1. update node right and its relationship
    // 2. update node right parent and its relationship
    // 3. update node parent and its relationship
    let right = node.right; 
    node.right = right && right.left || null; 
    if (node.right) {
      node.right.parent = node;
    }
    if (right) {
      right.parent = node.parent; 
    }
    if (node.parent === null) {
      this.root = right; 
    } else if (node === node.parent.left) {
      node.parent.left = right; 
    } else {
      node.parent.right = right; 
    }
    if (right) {
      right.left = node; 
    }
    node.parent = right;

    this.dirtyFlows.push([{
      node: cloneDeep(node),
      dirtyType: RBNodeDirtyType.leftRotated,
    }]);
  }

  private _rotateRight(node: RBNode) {
    let left = node.left; 
    node.left = left && left.right || null; 
    if (node.left !== null) {
      node.left.parent = node;
    }
    if (left) {
      left.parent = node.parent;
    }
    if (node.parent === null) {
      this.root = left; 
    } else if (node === node.parent.left) {
      node.parent.left = left; 
    } else {
      node.parent.right = left;
    }
    if (left) {
      left.right = node; 
    }
    node.parent = left;

    this.dirtyFlows.push([{
      node: cloneDeep(node),
      dirtyType: RBNodeDirtyType.rightRotated,
    }])
  }

  private _pushRecolorFlows(flows: RBNode[]) {
    this.dirtyFlows.push(flows.map(node => ({
      node, dirtyType: RBNodeDirtyType.recolor
    })));
  }

  private _fix2RedBlack(node: NRBNode) {
    if (node === null) {
      return;
    }
    // https://www.youtube.com/watch?v=5IBxA-bZZH8&index=3&list=PL9xmBV_5YoZNqDI8qfOZgzbqahCUmUEin
    // four senarios
    // 1. node = root -> color black
    // 2. node.uncle = red -> recolor
    // 3. node.uncle = black(Triangle) -> rotate node.parent
    // 4. node.uncle = black(line) -> rotate node.grandparent & recolor

    let parent: NRBNode; 
    let grandParent: NRBNode;

    while (
      node &&
      node !== this.root &&
      node.color !== RBColor.black &&
      node.parent && node!.parent.color === RBColor.red // parent color must be red
    ) {
      parent = node!.parent;
      grandParent = parent.parent;

      if (!parent || !grandParent) {
        break;
      }

      /*  Case : Parent of node is left child of Grand-parent of node */
      if (parent === grandParent.left) {
        let uncle = grandParent.right;
        /* Case : 1 The uncle of node is also red Only Recoloring required */
        if (uncle !== null && uncle.color == RBColor.red) { 
          grandParent.color = RBColor.red; 
          parent.color = RBColor.black;
          uncle.color = RBColor.black;

          const flows = [ grandParent, parent, uncle ];
          this._pushRecolorFlows(flows);

          node = grandParent;
        } else {
          /* Case : 2 node is right child of its parent Left-rotation required */
          if (node === parent.right) { 
            this._rotateLeft(parent); 
            node = parent; 
            parent = node.parent;
          }
          /* Case : 3  node is left child of its parent Right-rotation required */
          this._rotateRight(grandParent);
          this._swapColor(parent, grandParent);
          this._pushRecolorFlows([ parent!, grandParent ]);
          node = parent; 
        }
      } else {
        /* Case : B Parent of pt is right child of Grand-parent of pt */
        let uncle = grandParent.left;
        if (uncle !== null && uncle.color == RBColor.red) { 
          grandParent.color = RBColor.red; 
          parent.color = RBColor.black;
          uncle.color = RBColor.black;
          this._pushRecolorFlows([ grandParent, parent, uncle ]);
          node = grandParent;
        } else {
          /* Case : 2 node is right child of its parent Left-rotation required */
          if (node === parent.left) { 
            this._rotateRight(parent);
            node = parent; 
            parent = node.parent;
          }          
          /* Case : 3  node is left child of its parent Right-rotation required */
          this._rotateLeft(grandParent); 
          this._swapColor(parent, grandParent);
          this._pushRecolorFlows([ parent!, grandParent ]);
          node = parent;
        }
      }
    }
    if (this.root) {
      this.root.color = RBColor.black;
      this._pushRecolorFlows([ this.root ]);
    }
  }

  public delete(key: number) {
    if (this.root === null) return;
    this.dirtyFlows = [];
    const node = this.search(key, true);
    if (!node) return;
    this._deleteNode(node);
    return this.dirtyFlows;
  }

  public search(key: number, isAddtoDirty?: boolean): NRBNode {
    if (this.root === null) {
      return null;
    }
    let temp: NRBNode = this.root;
    while(temp) {
      if (key < temp.key) {
        if (temp.left === null) {
          break;
        } else {
          temp = temp.left;
          if (isAddtoDirty) {
            this.dirtyFlows.push([{
              node: temp,
              dirtyType: RBNodeDirtyType.visited,
            }]);
          }
        }
      } else if (key > temp.key) {
        if (temp.right === null) {
          break;
        } else {
          temp = temp.right;
          if (isAddtoDirty) {
            this.dirtyFlows.push([{
              node: temp,
              dirtyType: RBNodeDirtyType.visited,
            }]);
          }
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

  private _deleteNode(node: RBNode) {

    const replaceNode = this._BSTreplace(node);


    this.dirtyFlows.push([{
      node: replaceNode,
      dirtyType: RBNodeDirtyType.find,
      data: { text: 'replaceNode' }
    }]);

    const areBothBlack = (replaceNode === null || replaceNode.color === RBColor.black) &&
      (node.color === RBColor.black);

    // NOTICE replaceNode 选择不同会导致结果不同 也可以选择 predesuccor
    if (replaceNode === null) {
       // node is a leaf
      if (node === this.root) {
        this.root = null;
      } else {
        if (areBothBlack) {
          this._fixDoubleBlack(node);
        } else {
          if (node.sibling()) {
            node.sibling()!.color = RBColor.red;
          }
        }
        if (node.parent) {
          if (node.isOnLeft()) {
            node.parent.left = null;
          } else {
            node.parent.right = null;
          }
        }
      }
      return;
    }

    // one child
    if (node.left === null || node.right === null) {
      if (node === this.root) {
        node.key = replaceNode.key;
        node.left = node.right = null;
      } else {
        if (node.parent) {
          if (node.isOnLeft()) {
            node.parent.left = replaceNode;
          } else {
            node.parent.right = replaceNode;
          }
        }
        replaceNode.parent = node.parent;
        if (areBothBlack) {
          // TODO 这里一定不可能达到啊 如果只有一个child， replaceNode 也为黑，若replaceNode还有子节点，则在其他子节点路径必须还有黑，或者没有子节点，
          this._fixDoubleBlack(replaceNode);
        } else {
          replaceNode.color = RBColor.black;
        }
      }
      return;
    }

    // v has 2 children, swap values with successor and recurse
    this._swapKey(replaceNode, node);
    this._deleteNode(replaceNode);
  }


  private _fixDoubleBlack(node: NRBNode) {
    if (node === null || node === this.root) return;
    const sibling = node.sibling();
    const parent = node.parent;
    if (!parent) {
      return;
    }
    if (!sibling) {
      this._fixDoubleBlack(parent);
    } else {
      if (sibling.color === RBColor.red) {
        parent.color = RBColor.red;
        sibling.color = RBColor.black;
        if (sibling.isOnLeft()) {
          this._rotateRight(parent);
        } else {
          this._rotateLeft(parent);
        }
        this._fixDoubleBlack(node);
      } else {
        if (sibling.hasRedChild()) {
          if (sibling.left && sibling.left.color === RBColor.red) {
            if (sibling.isOnLeft()) {
              sibling.left.color = sibling.color; 
              sibling.color = parent.color;
              this._rotateRight(parent);
            } else {
              sibling.left.color = parent.color;
              this._rotateRight(sibling);
              this._rotateLeft(parent);
            }
          } else {
            if (sibling.isOnLeft()) {
              sibling.right!.color = parent.color;
              this._rotateLeft(sibling);
              this._rotateRight(parent);
            } else {
              sibling.right!.color = sibling.color; 
              sibling.color = parent.color; 
              this._rotateLeft(parent);
            }
          }
          parent.color = RBColor.black;
        } else {
          sibling.color = RBColor.red;
          if (parent.color === RBColor.black) {
            this._fixDoubleBlack(parent);
          } else {
            parent.color = RBColor.black;
          }
        }
      }
    }
  }

  // find node that replaces a deleted node in BST
  private _BSTreplace(node: RBNode) {
    if (node.left && node.right) {
      return node.right.leftmost();
    }
    return node.left || node.right;
  }

  // private _BSTreplace2(node: RBNode) {
  //   if (node.left && node.right) {
  //     return node.left.rightmost();
  //   }
  //   return node.right || node.left;
  // }

  private _BSTInsert(root: RBNode | null, node: RBNode) {
    if (root === null) return node;
    if (node.key < root.key) {
      this.dirtyFlows.push([ { node: root, dirtyType: RBNodeDirtyType.visited } ]);
      root.left = this._BSTInsert(root.left, node);
      root.left.parent = root; 
    } else if (node.key > root.key) {
      this.dirtyFlows.push([ { node: root, dirtyType: RBNodeDirtyType.visited } ]);
      root.right = this._BSTInsert(root.right, node); 
      root.right.parent = root; 
    }
    return root;
  }

}

export function checkInsert() {
  const rbt = new RedBlackTree();    
  rbt.insert(20);
  rbt.insert(10);
  rbt.insert(14);
  // rbt.inorder();
  console.log('level order')
  rbt.levelOrder();
}
// checkInsert();

export function checkInsert2() {
  const rbt = new RedBlackTree();    
  rbt.insert(5); 
  rbt.insert(3); 
  rbt.insert(8);
  rbt.insert(12);
  rbt.insert(7);
  // console.log(rbt.root);
  rbt.inorder();
  console.log('level order')
  rbt.levelOrder();
}
// checkInsert2()


export function checkDelete() {
  const tree = new RedBlackTree(); 
  tree.insert(7); 
  tree.insert(3); 
  tree.insert(18); 
  tree.insert(10);
  tree.insert(22); 
  tree.insert(8); 
  tree.insert(11); 
  tree.insert(26); 
  tree.insert(2); 
  tree.insert(6); 
  tree.insert(13);

  // tree.inorder();
  // console.log('level order')
  // tree.levelOrder();

  tree.delete(18);
  // tree.delete(11);
  // tree.delete(3);
  // tree.delete(10);
  // tree.delete(22);
  // tree.inorder();
  console.log('level order')
  tree.levelOrder();
}

// checkDelete();


export function checkrotateLeft() {
  const node = new RBNode(10);

  node.left = new RBNode(8);
  node.left.parent = node;

  node.left.left = new RBNode(4);
  node.left.left.parent = node.left;

  node.left.right = new RBNode(15);
  node.left.right.parent = node.left;

  node.left.right.left = new RBNode(14);
  node.left.right.left.parent = node.left.right;

  const rbt = new RedBlackTree();
  rbt.root = node;
  const root = rbt.rotateLeft(node, node.left);
  // console.log(root.left, root.left.left, 'rootroot')
  rbt.root = root;
  rbt.levelOrder();
}
// checkrotateLeft();
