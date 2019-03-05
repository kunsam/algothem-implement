import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { BasicTreeNode } from './../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';


export default class RecolorNodeAnimator extends AnimatorBase {
  private _changeToColor: number;
  private _colorChanged: boolean = false;

  constructor(node: BasicTreeNode, viewObject: BasicNodeViewobject, changeToColor: number, duration?: number) {
    super(node, viewObject, duration);
    this._changeToColor = changeToColor;
  }

  private get mesh() {
    return this._viewObject.nodeMesh;
  }

  private _changeColor() {
    if (this._colorChanged) {
      return;
    }
    if (this.mesh.material instanceof THREE.MeshPhongMaterial) {
      this.mesh.material.color.setHex(this._changeToColor);
      this._colorChanged = true;
    }
  }

  public animate() {
    if (this.currentFrame < this.duration) {
      this.currentFrame++;
      this._changeColor();
      return true;
    }
    return false;
  }
}