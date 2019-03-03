import { RBNode } from "../../../tree/red-black-tree";

export default class AnimatorBase {
  protected _node: RBNode;

  constructor(node: RBNode) {
    this._node = node;
  }

  public animate () {
    return false;
  };

  

}