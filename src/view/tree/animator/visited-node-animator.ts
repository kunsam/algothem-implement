import { BasicTreeNode } from './../../../tree/node/basic-node';
import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import BasicNodeViewobject from '../node/basic-node-viewobject';


export default class VisitedNodeAnimator extends AnimatorBase {
  private _oldColor?: THREE.Color;

  constructor(node: BasicTreeNode, viewObject: BasicNodeViewobject, duration?: number) {
    super(node, viewObject, duration);
  }

  private _changeColor() {
    if (!this._oldColor) {
      const material = this._viewObject.nodeMesh.material;
      if (material instanceof THREE.MeshPhongMaterial) {
        this._oldColor = material.color;
        material.color = new THREE.Color(0x00ff00);
      }
    }
  }

  private _resetColor() {
    if (this._oldColor) {
      const material = this._viewObject.nodeMesh.material;
      material.color = this._oldColor;
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