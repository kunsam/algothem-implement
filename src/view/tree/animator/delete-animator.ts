
import AnimatorBase from "./animator-base";
import { BasicTreeNode } from './../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';


export default class DeleteNodeAnimator extends AnimatorBase {
  public onAnimateEnd: Function;
  constructor(node: BasicTreeNode, viewObject: BasicNodeViewobject, onAnimateEnd: Function,  duration?: number) {
    super(node, viewObject, duration);
    this.onAnimateEnd = onAnimateEnd;
  }
  public animate() {
    if (this.currentFrame < this.duration) {
      this.currentFrame++;
      return true;
    }
    this.onAnimateEnd();
    return false;
  }
}