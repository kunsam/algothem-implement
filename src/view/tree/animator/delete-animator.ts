
import AnimatorBase from "./animator-base";
import { BasicTreeNode } from './../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';


export default class DeleteNodeAnimator extends AnimatorBase {
  constructor(node: BasicTreeNode, viewObject: BasicNodeViewobject, duration?: number) {
    super(node, viewObject, duration);
  }
  public animate() {
    if (this._viewObject.parent) {
      this._viewObject.parent.remove(this._viewObject);
    }
    return false;
  }
}