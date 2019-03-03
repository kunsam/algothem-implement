import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { RBNode } from "../../../tree/red-black-tree";

export default class RecolorNodeAnimator extends AnimatorBase {
  public END_FRAME = 20;
  private _mesh: THREE.Mesh;
  private _frame: number = 0;
  private _colorChanged: boolean = false;
  private _changeToColor: number;

  constructor(node: RBNode, mesh: THREE.Mesh, changeToColor: number, duration?: number) {
    super(node);
    this._mesh = mesh;
    this._changeToColor = changeToColor;
    if (duration) {
      this.END_FRAME = duration;
    }
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
    if (this._frame < this.END_FRAME) {
      this._frame++;
      this._changeColor();
      return true;
    }
    return false;
  }
}