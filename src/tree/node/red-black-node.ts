import { cloneDeep } from 'lodash';
import { BasicTreeNode } from './basic-node';

export enum RBColor {
  red = 1,
  black = 2,
}

export const RBCOLOR_HEX_TABLE = {
  [RBColor.red]: 0xff0000,
  [RBColor.black]: 0x000000,
}


export type NRBNode = RBNode | null;

export enum RBNodeDirtyType {
  recolor = 'recolor'
}

// visualization: https://www.cs.usfca.edu/~galles/visualization/RedBlack.html
export class RBNode extends BasicTreeNode {
  private _color: RBColor = RBColor.red;
  constructor(key: number) {
    super(key);
  }

  public get left(): NRBNode {
    return this._left as NRBNode;
  }

  public set left(node: NRBNode) {
    this.setLeft(node);
  }

  public get right() {
    return this._right as NRBNode;
  }

  public set right(node: NRBNode) {
    this.setRight(node);
  }

  public get parent() {
    return this._parent as NRBNode;
  }

  public get color() {
    return this._color;
  }
  public set color(color: RBColor) {
    if (color === this._color) {
      this.dirty = false;
      return;
    }
    this._color = color;
    this.addToFlow({
      node: cloneDeep(this),
      dirtyType: RBNodeDirtyType.recolor,
      data: { color: RBCOLOR_HEX_TABLE[color] },
    });
  }

  public hasRedChild() {
    const left = this.left as NRBNode;
    const right = this.right as NRBNode;
    return (left !== null && left.color === RBColor.red) ||
      (right !== null && right.color === RBColor.red);
  }

}