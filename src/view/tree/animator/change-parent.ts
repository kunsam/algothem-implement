
import AnimatorBase from "./animator-base";
import { BasicTreeNode, NBasicTreeNode } from './../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';


export interface ChangeParentAnimatorProps{
  duration?: number;
  node: BasicTreeNode;
  viewObject: BasicNodeViewobject;
  newParentViewObject: BasicNodeViewobject;
  oldParentViewObject: BasicNodeViewobject;
}

export default class ChangeParentAnimator extends AnimatorBase {

  private _props: ChangeParentAnimatorProps;
 
  constructor(props: ChangeParentAnimatorProps) {
    super(props.node, props.viewObject, props.duration);
    this._props = props;
    if (!props.duration) {
      this.duration = 40;
    }
  }

  private _isSameKey(node1: NBasicTreeNode, node2: NBasicTreeNode) {
    if (node1 === null || node2 === null) {
      return false;
    }
    return node1.key === node2.key;
  }

  public animate() {
    if (this.currentFrame < this.duration) {
      this.currentFrame++;
      const { newParentViewObject, oldParentViewObject, node } = this._props;
      if (this._isSameKey(node, oldParentViewObject.node.left) || this._isSameKey(node, oldParentViewObject.node.right)) {
        return false;
      }
      const directffset = newParentViewObject.position.clone().sub(oldParentViewObject.position);
      // new parent was once child
      const p = oldParentViewObject.position.clone().add(
        directffset.clone().normalize().multiplyScalar(this.currentFrame * directffset.length() / this.duration)
      );
      this._viewObject.refreshLineMesh(p);
      return true;
    }
    return false;
  }
}