import { BasicTreeNode } from './../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';


export default class AnimatorBase {
  public duration = 20;
  public _node: BasicTreeNode;
  public currentFrame: number = 0;
  public _viewObject: BasicNodeViewobject;

  constructor(node: BasicTreeNode, viewObject: BasicNodeViewobject, duration?: number) {
    this._node = node;
    this.currentFrame = 0;
    this._viewObject = viewObject;
    if (duration) {
      this.duration = duration;
    }
  }

  public reset() {
    this.currentFrame = 0;
  }

  public animate () {
    return false;
  };

  

}