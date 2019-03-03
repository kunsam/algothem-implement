import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { RBNode } from "../../../tree/red-black-tree";

export default class DeleteNodeAnimator extends AnimatorBase {
  private _mesh: THREE.Mesh;

  constructor(node: RBNode, mesh: THREE.Mesh, duration?: number) {
    super(node, duration);
    this._mesh = mesh;
  }

  public animate() {
    if (this._mesh.parent) {
      this._mesh.parent.remove(this._mesh);
    }
    return false;
  }
}