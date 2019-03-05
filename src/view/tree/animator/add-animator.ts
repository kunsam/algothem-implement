
import AnimatorBase from "./animator-base";
import { BasicTreeNode } from './../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';


export default class AddNodeAnimator extends AnimatorBase {
  private _callback: Function;
  constructor(node: BasicTreeNode, viewObject: BasicNodeViewobject, callback: Function, duration?: number) {
    super(node, viewObject, duration);
    this._callback = callback;
  }
  public animate() {
    this._callback();
    return false;
  }
}