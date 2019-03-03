import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { RBNode } from "../../../tree/red-black-tree";

export default class VisitedNodeAnimator extends AnimatorBase {
  private _mesh: THREE.Mesh;
  private _oldColor?: THREE.Color;

  constructor(node: RBNode, mesh: THREE.Mesh, duration?: number) {
    super(node, duration);
    this._mesh = mesh;
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
    if (this.currentFrame < this.duration) {
      this.currentFrame++;
      this._changeColor();
      return true;
    } else if (this.currentFrame >= this.duration) {
      this._resetColor();
    }
    return false;
  }
}