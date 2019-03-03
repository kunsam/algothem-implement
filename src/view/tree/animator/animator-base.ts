import { RBNode } from "../../../tree/red-black-tree";

export default class AnimatorBase {
  protected _node: RBNode;
  public duration = 20;
  public currentFrame: number = 0;

  constructor(node: RBNode, duration?: number) {
    this._node = node;
    this.currentFrame = 0;
    if (duration) {
      this.duration = duration;
    }
  }

  public animate () {
    return false;
  };

  

}