
import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import FontManager from '../../font/font-manager';
import { BasicTreeNode } from './../../../tree/node/basic-node';
import BasicNodeViewobject from '../node/basic-node-viewobject';


export interface ShowTextAnimatorProps{
  text: string;
  duration?: number;
  node: BasicTreeNode;
  viewObject: BasicNodeViewobject;
  parameters?: THREE.TextGeometryParameters;
  positionOffset?: THREE.Vector3;
}

export default class ShowTextAnimator extends AnimatorBase {

  private _textMesh?: THREE.Mesh;
  private _props: ShowTextAnimatorProps;

  constructor(props: ShowTextAnimatorProps) {
    super(props.node, props.viewObject, props.duration);
    this._props = props;
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
    const positionOffset = this._props.positionOffset;
    textMesh.position.y += positionOffset ? positionOffset.y : 20;
    textMesh.position.x += positionOffset ? positionOffset.x : 50;
    this._textMesh = textMesh;
    this._viewObject.add(textMesh);
  }

  private _resetText() {
    if (this._textMesh) {
      this._viewObject.remove(this._textMesh);
    }
  }

  public animate() {
    if (this.currentFrame < this.duration) {
      this.currentFrame++;
      this._addText();
      return true;
    } else if (this.currentFrame >= this.duration) {
      this._resetText();
    }
    return false;
  }
}