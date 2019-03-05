
import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import FontManager from '../../font/font-manager';
import { NodeDirtyType } from '../global-node-dirty-flows';
import BasicNodeViewobject from '../node/basic-node-viewobject';
import { BasicTreeNode, NBasicTreeNode } from './../../../tree/node/basic-node';


export interface IRotateInfo{
  center: THREE.Vector3;
  initAngle: number;
}

export default class RotatedAnimator extends AnimatorBase {
  private _dirtyType: NodeDirtyType;
  private _viewObjectMap: Map<number, BasicNodeViewobject>;
  private _textMap: Map<number, THREE.Mesh> = new Map();
  private _initRotateInfoMap: Map<number, IRotateInfo> = new Map();

  constructor(node: BasicTreeNode, viewObject: BasicNodeViewobject, dirtyType: NodeDirtyType, map: Map<number, BasicNodeViewobject>, duration?: number) {
    super(node, viewObject, duration);
    this._viewObjectMap = map;
    this._dirtyType = dirtyType;
    if (!duration) {
      this.duration = 40;
    }
    this._bindCloneNode();
  }

  private _bindCloneNode() {
    // this._viewObject.cloneNode = this._node;
  }

  private _rotateNode(node: BasicTreeNode, dirtyDirection: NodeDirtyType, isOriginChild?: boolean) {
    const nodeViewObject = this._viewObjectMap.get(node.key);
    if (!nodeViewObject) {
      return;
    }
    const isLeftRotate = dirtyDirection === NodeDirtyType.leftRotated;
    const radius = Math.sqrt(
      Math.pow(BasicNodeViewobject.horizontalOffset / 2, 2) +
      Math.pow(BasicNodeViewobject.verticalOffset / 2, 2)
    );
    const sign = isLeftRotate ? -1 : 1;
    let initInfo = this._initRotateInfoMap.get(node.key);
    if (!initInfo) {
      const childSign = isOriginChild ? -1 : 1;
      const initCircleCenter = nodeViewObject.position.clone().sub(new THREE.Vector3(
        -1 * sign * BasicNodeViewobject.horizontalOffset / 2,
        childSign * BasicNodeViewobject.verticalOffset / 2,
        0,
      ));
      const distance = new THREE.Vector3().subVectors(
        nodeViewObject.position,
        initCircleCenter.clone().add(new THREE.Vector3(radius, 0, 0))
      ).length();
      let initAngle = childSign * Math.acos((2 * radius * radius - distance * distance) / (2 * radius * radius));
      initInfo = {
        center: initCircleCenter,
        initAngle,
      }
      this._initRotateInfoMap.set(node.key, initInfo);
    }
    const animateAngle = -1 * sign * this.currentFrame * Math.PI / this.duration;
    const x = initInfo.center.x + radius * Math.cos(animateAngle + initInfo.initAngle);
    const y = initInfo.center.y + radius * Math.sin(animateAngle + initInfo.initAngle);
    const newPosition = new THREE.Vector3(x, y, nodeViewObject.position.z);
    // nodeViewObject 里的oarent
    nodeViewObject.updatePosition(newPosition);
    // if (this.currentFrame === 0) {
    //   console.log(newPosition, nodeViewObject, 'nodeViewObjectnodeViewObject')
    // }
    this._addText(node.key);
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
    nodeViewObject.refresh();
    if (node.left) {
      this._keepChildTrack(node.left);
    }
    if (node.right) {
      this._keepChildTrack(node.right);
    }
  }

  private _rotate() {
    const self = this._node;
    const parent = self.parent;
    if (!parent) {
      return;
    }
    const nodeViewObject = this._viewObjectMap.get(self.key);
    const parentViewObject = this._viewObjectMap.get(parent.key);
    if (!nodeViewObject || !parentViewObject) {
      return;
    }
    this._rotateNode(self, this._dirtyType);
    this._rotateNode(parent, this._dirtyType, true);
    this._keepChildTrack(self.left);
    this._keepChildTrack(self.right);
    if (self.isOnLeft()) {
      this._keepChildTrack(parent.right);
    } else {
      this._keepChildTrack(parent.left);
    }
    
  }

  private _addText(nodeKey: number) {
    if (this._textMap.has(nodeKey)) {
      return;
    }
    const nodeViewObject = this._viewObjectMap.get(nodeKey);
    if(!nodeViewObject) {
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
    this._textMap.set(nodeKey, text);
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
      this._viewObject.cloneNode = undefined;
      this._resetText();
    }
    return false;
  }
}