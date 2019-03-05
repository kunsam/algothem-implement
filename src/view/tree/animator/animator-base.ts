import { BasicTreeNode } from './../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';


export default class AnimatorBase {
  public duration = 20;
  protected _node: BasicTreeNode;
  public currentFrame: number = 0;
  protected _viewObject: BasicNodeViewobject;

  constructor(node: BasicTreeNode, viewObject: BasicNodeViewobject, duration?: number) {
    this._node = node;
    this.currentFrame = 0;
    this._viewObject = viewObject;
    if (duration) {
      this.duration = duration;
    }
  }

  public animate () {
    return false;
  };

  

}