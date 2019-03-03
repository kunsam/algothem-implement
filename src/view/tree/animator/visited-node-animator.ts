import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { RBNode } from "../../../tree/red-black-tree";

export default class VisitedNodeAnimator extends AnimatorBase {
  public END_FRAME = 20;
  private _mesh: THREE.Mesh;
  private _frame: number = 0;
  private _oldColor?: THREE.Color;

  constructor(node: RBNode, mesh: THREE.Mesh, duration?: number) {
    super(node);
    this._mesh = mesh;
    if (duration) {
      this.END_FRAME = duration;
    }
  }

  private _changeColor() {
    if (!this._oldColor) {
      this._oldColor = this._mesh.material.color;
      this._mesh.material.color = new THREE.Color(0x00ff00);
    }
  }

  private _resetColor() {
    if (this._oldColor) {
      this._mesh.material.color = this._oldColor;
    }
  }
  
  public animate(): boolean {
    if (this._frame < this.END_FRAME) {
      this._frame++;
      this._changeColor();
      return true;
    } else if (this._frame >= this.END_FRAME) {
      this._resetColor();
    }
    return false;
  }
}