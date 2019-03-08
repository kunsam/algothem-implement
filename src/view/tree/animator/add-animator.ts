
import AnimatorBase from "./animator-base";
import { BasicTreeNode } from './../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';


export default class AddNodeAnimator extends AnimatorBase {
  private _callback: Function;
  private _excuted: boolean = false;
  constructor(node: BasicTreeNode, viewObject: BasicNodeViewobject, callback: Function, duration?: number) {
    super(node, viewObject, duration);
    this._callback = callback;
  }
  public animate() {
    if (this.currentFrame < this.duration) {
      this.currentFrame++;
      if (!this._excuted) {
        this._callback();
        this._excuted = true;
      }
      return true;
    }
    return false;
  }
}