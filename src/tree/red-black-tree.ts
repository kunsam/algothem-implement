 
import { cloneDeep } from 'lodash';
import { VisitNodeFunction } from './node/basic-node';
import { BinarySearchTree } from './binary-search-tree';
import { BinarySearchTreeUtil } from './binary-search-tree-util';
import { NRBNode, RBNode, RBColor } from './node/red-black-node';
import { GlobalNodeDirtyFlows, NodeDirtyType } from './../view/tree/global-node-dirty-flows';



// 还可以实现的操作包括 join / union / difference
export class RedBlackTree extends BinarySearchTree {
  public root: NRBNode;
  constructor(root?: NRBNode) {
    super(root);
    this.root = root === undefined ? null : root;
  }
  public inorderTraverse(callback: VisitNodeFunction) {
    BinarySearchTreeUtil.inorderTraverse(this.root, callback);
  }

  public insert(key: number) {
    let addedNode: NRBNode = null;
    const props = {
      key,
      root: this.root,
      consturctNode: (key: number) => {
        addedNode = new RBNode(key);
        return addedNode;
      },
    };
    BinarySearchTreeUtil.insert(props);
    this.root = props.root;
    if (addedNode) {
      this._fix2RedBlack(addedNode);
    }
  }

  public search(key: number, isAddtoDirty?: boolean): NRBNode {
    return BinarySearchTreeUtil.search(key, this.root, isAddtoDirty) as NRBNode;
  }

  public delete(key: number) {
    if (this.root === null) return;
    const node = this.search(key, true);
    if (!node) return null;
    this._deleteNode(node);
  }



  private _swapColor(node1: NRBNode, node2: NRBNode) {
    if (node1 === null || node2 === null) {
      return;
    }
    GlobalNodeDirtyFlows.startSequence();
    const temp = node1.color;
    node1.color = node2.color;
    node2.color = temp;
    GlobalNodeDirtyFlows.endSequence();
  }

  private _swapKey(node1: RBNode, node2: RBNode) {
    if (node1 === null || node2 === null) {
      return;
    }
    const temp = node1.key;
    node1.key = node2.key;
    node2.key = temp;
    GlobalNodeDirtyFlows.addToDirtyFlows([{
      node: cloneDeep(node1),
      dirtyType: NodeDirtyType.swapKey,
      data: { relatedNode: cloneDeep(node2) },
    }]);
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
          GlobalNodeDirtyFlows.startSequence();
          grandParent.color = RBColor.red;
          parent.color = RBColor.black;
          uncle.color = RBColor.black;
          GlobalNodeDirtyFlows.endSequence();
          node = grandParent;
        } else {
          /* Case : 2 node is right child of its parent Left-rotation required */
          if (node === parent.right) {
            this.rotateLeft(parent);
            node = parent; 
            parent = node && node.parent || null;
          }
          /* Case : 3  node is left child of its parent Right-rotation required */
          this.rotateRight(grandParent);
          this._swapColor(parent, grandParent);
          node = parent; 
        }
      } else {
        /* Case : B Parent of pt is right child of Grand-parent of pt */
        let uncle = grandParent.left;
        if (uncle !== null && uncle.color == RBColor.red) { 
          GlobalNodeDirtyFlows.startSequence();
          grandParent.color = RBColor.red;
          parent.color = RBColor.black;
          uncle.color = RBColor.black;
          GlobalNodeDirtyFlows.endSequence();
          node = grandParent;
        } else {
          /* Case : 2 node is right child of its parent Left-rotation required */
          if (node === parent.left) { 
            this.rotateRight(parent);
            node = parent; 
            parent = node && node.parent || null;
          }          
          /* Case : 3  node is left child of its parent Right-rotation required */
          this.rotateLeft(grandParent); 
          this._swapColor(parent, grandParent);
          node = parent;
        }
      }
    }
    if (this.root) {
      this.root.dirty = true;
      this.root.color = RBColor.black;
    }
  }

  private _deleteNode(node: RBNode) {
    const replaceNode: NRBNode = this._BSTreplace(node) as NRBNode;

    GlobalNodeDirtyFlows.addToDirtyFlows([
      {
        node: cloneDeep(node),
        dirtyType: NodeDirtyType.showText,
        data: { text: 'Delete Target' }
      },
      {
        node: cloneDeep(replaceNode),
        dirtyType: NodeDirtyType.showText,
        data: { text: 'Replace Node' }
      },
    ], 'RedBlackTree._deleteNode');

    const areBothBlack = (replaceNode === null || replaceNode.color === RBColor.black) &&
      (node.color === RBColor.black);

    const sibling: NRBNode = node.sibling as NRBNode;
    // NOTICE replaceNode 选择不同会导致结果不同 也可以选择 predesuccor
    if (replaceNode === null) {
       // node is a leaf
      if (node === this.root) {
        this.root = null;
      } else {
        if (areBothBlack) {
          this._fixDoubleBlack(node);
        } else {
          if (sibling) {
            sibling.dirty = true;
            sibling.color = RBColor.red;
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
        if (areBothBlack) {
          // TODO 这里一定不可能达到啊 如果只有一个child， replaceNode 也为黑，若replaceNode还有子节点，则在其他子节点路径必须还有黑，或者没有子节点，
          this._fixDoubleBlack(replaceNode);
        } else {
          replaceNode.dirty = true;
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
    let parent = node.parent;
    if (!parent) {
      return;
    }
    if (!node.sibling) {
      this._fixDoubleBlack(parent);
    } else {
      if (node.sibling.color === RBColor.red) {
        GlobalNodeDirtyFlows.startSequence();
        parent.color = RBColor.red;
        node.sibling.color = RBColor.black;
        GlobalNodeDirtyFlows.endSequence();
        if (node.sibling.isOnLeft()) {
          this.rotateRight(parent);
        } else {
          this.rotateLeft(parent);
        }
        this._fixDoubleBlack(node);
      } else {
        if (node.sibling.hasRedChild()) {
          if (node.sibling.left && node.sibling.left.color === RBColor.red) {
            if (node.sibling.isOnLeft()) {
              GlobalNodeDirtyFlows.startSequence();
              node.sibling.left.color = node.sibling.color;
              node.sibling.color = parent.color;
              GlobalNodeDirtyFlows.endSequence();
              this.rotateRight(parent);
            } else {
              node.sibling.left.color = parent.color;
              this.rotateRight(node.sibling);
              this.rotateLeft(parent);
            }
          } else {
            if (node.sibling.isOnLeft()) {
              node.sibling.right!.dirty = true;
              node.sibling.right!.color = parent.color;
              this.rotateLeft(node.sibling);
              this.rotateRight(parent);
            } else {
              GlobalNodeDirtyFlows.startSequence();
              node.sibling.right!.color = node.sibling.color;
              node.sibling.color = parent.color;
              GlobalNodeDirtyFlows.endSequence();
              this.rotateLeft(parent);
            }
          }
          parent!.dirty = true;
          parent!.color = RBColor.black;
        } else {
          node.sibling.dirty = true;
          node.sibling.color = RBColor.red;
          if (parent.color === RBColor.black) {
            this._fixDoubleBlack(parent);
          } else {
            parent.dirty = true;
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
