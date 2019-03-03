import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { RBNode } from "../../../tree/red-black-tree";

export default class RecolorNodeAnimator extends AnimatorBase {
  private _mesh: THREE.Mesh;
  private _changeToColor: number;
  private _colorChanged: boolean = false;

  constructor(node: RBNode, mesh: THREE.Mesh, changeToColor: number, duration?: number) {
    super(node, duration);
    this._mesh = mesh;
    this._changeToColor = changeToColor;
  }

  private _changeColor() {
    if (this._colorChanged) {
      return;
    }
    if (this._mesh.material instanceof THREE.MeshPhongMaterial) {
      this._mesh.material.color.setHex(this._changeToColor);
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