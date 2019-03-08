
import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import FontManager from '../../font/font-manager';
import { NodeDirtyType } from '../global-node-dirty-flows';
import BasicNodeViewobject from '../node/basic-node-viewobject';
import { BasicTreeNode, NBasicTreeNode } from './../../../tree/node/basic-node';


export interface IRotateInfo{
  center: THREE.Vector3;
  initAngle: number;
  radius: number;
}

export interface RotatedAnimatorProps {
  duration?: number
  parentKey: number
  node: BasicTreeNode
  dirtyType: NodeDirtyType
  viewObject: BasicNodeViewobject
  viewObjectMap: Map<number, BasicNodeViewobject> 
}

export default class RotatedAnimator extends AnimatorBase {
  private _parentKey: number;
  private _dirtyType: NodeDirtyType;
  private _parentViewObject?: BasicNodeViewobject;
  private _textMap: Map<number, THREE.Mesh> = new Map();
  private _viewObjectMap: Map<number, BasicNodeViewobject>;
  private _initRotateInfoMap: Map<number, IRotateInfo> = new Map();

  constructor(props: RotatedAnimatorProps) {
    super(props.node, props.viewObject, props.duration);
    const { dirtyType, duration, parentKey } = props;
    this._dirtyType = dirtyType;
    this._viewObjectMap = props.viewObjectMap;
    this._parentKey = parentKey;
    if (!duration) {
      this.duration = 40;
    }
    this._initInfo();
  }

  private _getInitAngel(center: THREE.Vector3, position: THREE.Vector3, radius: number) {
    if (!radius) return 0;
    const centerHorizonOffset = center.clone().add(new THREE.Vector3(radius, 0, 0));
    const offset = new THREE.Vector3().subVectors(centerHorizonOffset, position);
    const oflenght = offset.length();
    let angle = Math.acos((2 * radius * radius - oflenght * oflenght) / (2 * radius * radius));
    if (offset.y > 0) {
      angle = Math.PI * 2 - angle;
    }
    return angle;
  }
  private _initInfo() {
    if (!this._parentViewObject) {
      return;
    }
    const childPosition = this._viewObject.position;
    const parentPosition = this._parentViewObject.position;
    const dir2ChildOffset = new THREE.Vector3().subVectors(
      childPosition,
      parentPosition,
    );
    const parentRotateCenter = parentPosition.clone().add(
      dir2ChildOffset.clone().divideScalar(2)
    );
    const parentRadius = new THREE.Vector3().subVectors(parentRotateCenter, parentPosition).length();
    const parentInitAngle = this._getInitAngel(parentRotateCenter, parentPosition, parentRadius);
    this._initRotateInfoMap.set(
      this._parentViewObject.node.key,
      { center: parentRotateCenter, initAngle: parentInitAngle, radius: parentRadius }
    );
    const childRotateCenter = childPosition.clone().add(
      new THREE.Vector3(dir2ChildOffset.x, -1 * dir2ChildOffset.y, dir2ChildOffset.z).divideScalar(2)
    );
    const childRadius = new THREE.Vector3().subVectors(childRotateCenter, childPosition).length();
    const childInitAngle = this._getInitAngel(childRotateCenter, childPosition, childRadius);
    this._initRotateInfoMap.set(
      this._viewObject.node.key,
      { center: childRotateCenter, initAngle: childInitAngle, radius: childRadius }
    );

    // console.log(childRadius, childRotateCenter, parentRotateCenter, childInitAngle, 'childInitAngle')
  }

  private _rotateNode(viewObject: BasicNodeViewobject, dirtyDirection: NodeDirtyType) {
    const isLeftRotate = dirtyDirection === NodeDirtyType.leftRotated;
    const sign = isLeftRotate ? 1 : -1;
    const initInfo = this._initRotateInfoMap.get(viewObject.node.key);
    if (!initInfo) {
      return;
    }
    const { radius, center, initAngle } = initInfo;
    const animateAngle = sign * this.currentFrame * Math.PI / this.duration;
    const x = center.x + radius * Math.cos(animateAngle + initAngle);
    const y = center.y + radius * Math.sin(animateAngle + initAngle);
    const newPosition = new THREE.Vector3(x, y, viewObject.position.z);
    viewObject.updatePosition(newPosition);
    // if (this.currentFrame === 0) {
      // console.log(newPosition, viewObject.node.key, `newPosition${viewObject.node.key}`)
    
    this._addText(viewObject);
  }

  private _keepChildTrack(node: NBasicTreeNode) {
    if (node === null) {
      return;
    }
    if (!node.parent) {
      return;
    }
    const nodeViewObject = this._viewObjectMap.get(node.key);
    const parentViewObject = this._viewObjectMap.get(node.parent.key);
    if (!parentViewObject || !nodeViewObject) {
      return;
    }
    if (node.isOnLeft()) {
      parentViewObject.left = nodeViewObject;
    } else {
      parentViewObject.right = nodeViewObject;
    }
    nodeViewObject.connectToOther(parentViewObject);
    if (node.left) {
      this._keepChildTrack(node.left);
    }
    if (node.right) {
      this._keepChildTrack(node.right);
    }
  }

  private _rotate() {
    if (!this._parentViewObject) {
      this._parentViewObject = this._viewObjectMap.get(this._parentKey);
      this._initInfo();
    }
    if (!this._parentViewObject) {
      return;
    }
    this._rotateNode(this._viewObject, this._dirtyType);
    this._viewObject.changeColor(0x00ff00);
    this._rotateNode(this._parentViewObject, this._dirtyType);
    this._viewObject.refreshLineMesh(this._parentViewObject.position);
  
    this._keepChildTrack(this._node.left);
    this._keepChildTrack(this._node.right);

    const parent = this._node.parent;
    if (parent) {
      if (this._node.isOnLeft()) {
        this._keepChildTrack(parent.right);
      } else {
        this._keepChildTrack(parent.left);
      }
      if (parent.parent) {
        const gpo = this._viewObjectMap.get(parent.parent.key);
        if (gpo) {
          this._parentViewObject.refreshLineMesh(gpo.position);
        }
      }
    }
  }

  private _addText(nodeViewObject: BasicNodeViewobject) {
    if (this._textMap.has(nodeViewObject.node.key)) {
      return;
    }
    const textGeo = new THREE.TextGeometry(`${
      this._dirtyType === NodeDirtyType.leftRotated ? 'Left-Rotating' : 'Right-Rotating'
    }`, {
      height: 0,
      size: 20,
      font: FontManager.getFont('helv'),
    });
    const text = new THREE.Mesh(
      textGeo,
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    text.position.y += 80;
    text.position.x += 60;
    nodeViewObject.add(text);
    this._textMap.set(nodeViewObject.node.key, text);
  }

  private _resetText() {
    this._textMap.forEach(pmesh => {
      if (pmesh.parent) {
        pmesh.parent.remove(pmesh);
      }
    });
    this._textMap.clear();
  }

  public animate() {
    if (this.currentFrame < this.duration) {
      this._rotate();
      this.currentFrame++;
      return true;
    } else if (this.currentFrame >= this.duration) {
      this._initRotateInfoMap.clear();
      this._viewObject.resetColor();
      this._resetText();
    }
    return false;
  }
}