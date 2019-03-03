import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { RBNode } from "../../../tree/red-black-tree";
import FontManager from '../../font/font-manager';

export interface ShowTextAnimatorProps{
  node: RBNode;
  text: string;
  mesh: THREE.Mesh;
  duration?: number;
  parameters?: THREE.TextGeometryParameters;
}

export default class ShowTextAnimator extends AnimatorBase {

  private _frame: number = 0;
  private _textMesh?: THREE.Mesh;
  private _props: ShowTextAnimatorProps;

  public END_FRAME = 20;

  constructor(props: ShowTextAnimatorProps) {
    super(props.node);
    this._props = props;
    if (props.duration) {
      this.END_FRAME = props.duration;
    }
  }
  private _addText() {
    if (this._textMesh) {
      return;
    }
    const parameters = this._props.parameters || {};
    const { height, size, font } = parameters;
    const textGeo = new THREE.TextGeometry(this._props.text, {
      height: height === undefined ? 0 : height,
      size: size === undefined ? 20 : size,
      font: font || FontManager.getFont('helv'),
    });
    const textMesh = new THREE.Mesh(
      textGeo,
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    textMesh.position.y += 20;
    textMesh.position.x += 50;
    this._textMesh = textMesh;
    this._props.mesh.add(textMesh);
  }

  private _resetText() {
    if (this._textMesh) {
      this._props.mesh.remove(this._textMesh);
    }
  }

  public animate() {
    console.log(this._frame, 'this._animatorFlows')
    if (this._frame < this.END_FRAME) {
      this._frame++;
      this._addText();
      return true;
    } else if (this._frame >= this.END_FRAME) {
      this._resetText();
    }
    return false;
  }
}