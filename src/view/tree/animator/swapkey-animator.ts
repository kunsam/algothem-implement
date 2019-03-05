
import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { BasicTreeNode } from './../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';

export default class SwapKeyAnimator extends AnimatorBase {

  public node2: BasicTreeNode;
  private _node1ViewObject: BasicNodeViewobject;
  private _node2ViewObject: BasicNodeViewobject;

  private _node1TextInitMesh?: THREE.Mesh;
  private _node2TextInitMesh?: THREE.Mesh;

  private _initOffset: THREE.Vector3;

  constructor(node1: BasicTreeNode, node2: BasicTreeNode, node1ViewObject: BasicNodeViewobject, node2ViewObject: BasicNodeViewobject, duration?: number) {
    super(node1, node1ViewObject, duration);
    this.node2 = node2;
    this._node1ViewObject = node1ViewObject;
    this._node2ViewObject = node2ViewObject;

    this._node1TextInitMesh = node1ViewObject.textMesh.clone();
    this._node2TextInitMesh = node2ViewObject.textMesh.clone();

    this._initOffset = new THREE.Vector3().subVectors(
      node1ViewObject.position,
      node2ViewObject.position,
    );
  }

  private _moveText() {
    if (!this._node1ViewObject || !this._node2ViewObject) {
      return;
    }
    
    this._node1ViewObject.textMesh.position.copy(
      this._node1TextInitMesh!.position.clone().add(
        this._initOffset.clone().normalize().multiplyScalar(
          -1 * this.currentFrame * this._initOffset.length() / this.duration
        )
      )
    );

    this._node2ViewObject.textMesh.position.copy(
      this._node1TextInitMesh!.position.clone().add(
        this._initOffset.clone().normalize().multiplyScalar(
          this.currentFrame * this._initOffset.length() / this.duration
        )
      )
    );

  }

  private _swapText() {
    if (!this._node1ViewObject || !this._node2ViewObject) {
      return;
    }

    this._node1ViewObject.remove(this._node1ViewObject.textMesh);
    this._node1ViewObject.add(this._node2TextInitMesh!);
    this._node1ViewObject.textMesh = this._node2TextInitMesh!;

    this._node2ViewObject.remove(this._node2ViewObject.textMesh);
    this._node2ViewObject.add(this._node1TextInitMesh!);
    this._node2ViewObject.textMesh = this._node1TextInitMesh!;
  }

  public animate() {
    if (this.currentFrame < this.duration) {
      this.currentFrame++;
      this._moveText();
      return true;
    }
    this._swapText();
    return false;
  }
}