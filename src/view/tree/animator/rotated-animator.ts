
import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { getConnectLineMesh } from '../mesh';
import FontManager from '../../font/font-manager';
import { RBNode } from "../../../tree/red-black-tree";
import { NRBNode } from './../../../tree/red-black-tree';
import { RBNodeDirtyType } from "../red-black-tree-viewobject";
import { RBNodeViewObject, RedBlackTreeViewObject } from './../red-black-tree-viewobject';


export interface IRotateInfo{
  center: THREE.Vector3;
  initAngle: number;
}

export default class RotatedAnimator extends AnimatorBase {
  private _dirtyType: RBNodeDirtyType;
  private _viewObjectMap: Map<number, RBNodeViewObject>;
  private _textMap: Map<number, THREE.Mesh> = new Map();
  private _initRotateInfoMap: Map<number, IRotateInfo> = new Map();

  constructor(node: RBNode, dirtyType: RBNodeDirtyType, map: Map<number, RBNodeViewObject>, duration?: number) {
    super(node, duration);
    this._viewObjectMap = map;
    this._dirtyType = dirtyType;
    if (!duration) {
      this.duration = 40;
    }
  }
  
  private _rotateNode(node: RBNode, dirtyDirection: RBNodeDirtyType, isOriginChild?: boolean) {
    const nodeViewObject = this._viewObjectMap.get(node.key);
    if (!nodeViewObject) {
      return;
    }

    nodeViewObject.mesh.children.forEach(child => {
      if (child.userData.isConnectLine) {
        nodeViewObject.mesh.remove(child);
      }
    });

    const isLeftRotate = dirtyDirection === RBNodeDirtyType.leftRotated;

    const radius = Math.sqrt(
      Math.pow(RedBlackTreeViewObject.horizontalOffset / 2, 2) +
      Math.pow(RedBlackTreeViewObject.verticalOffset / 2, 2)
    );
    const sign = isLeftRotate ? -1 : 1;

    let initInfo = this._initRotateInfoMap.get(node.key);
    if (!initInfo) {
      const childSign = isOriginChild ? -1 : 1;
      const initCircleCenter = nodeViewObject.mesh.position.clone().sub(new THREE.Vector3(
        -1 * sign * RedBlackTreeViewObject.horizontalOffset / 2,
        childSign * RedBlackTreeViewObject.verticalOffset / 2,
        0,
      ));
      const distance = new THREE.Vector3().subVectors(
        nodeViewObject.mesh.position,
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

    const newPosition = new THREE.Vector3(x, y, nodeViewObject.mesh.position.z);
    nodeViewObject.mesh.position.copy(newPosition);
    node.userData.position = newPosition;
    this._addText(node.key);
    this._refreshNodeConnectLine(node);
  }

  private _refreshNodeConnectLine(node: NRBNode) {
    if (!node) {
      return;
    }
    const nodeViewObject = this._viewObjectMap.get(node.key);
    if(!nodeViewObject) {
      return;
    }
    nodeViewObject.mesh.children.forEach(child => {
      if (child instanceof THREE.Line) {
        nodeViewObject.mesh.remove(child);
      }
    });
    const line = getConnectLineMesh(nodeViewObject.mesh);
    if (line) {
      nodeViewObject.mesh.add(line);
    }
  }

  private _keepChildTrack(node: NRBNode) {
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
    nodeViewObject.mesh.position.copy(
      RedBlackTreeViewObject.getChildPosition(node, parentViewObject.mesh.position)
    );
    this._refreshNodeConnectLine(node);
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
      this._dirtyType === RBNodeDirtyType.leftRotated ? 'Left-Rotating' : 'Right-Rotating'
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
    text.userData.isTextNode = true;
    nodeViewObject.mesh.add(text);
    this._textMap.set(nodeKey, nodeViewObject.mesh);
  }

  private _resetText() {
    this._textMap.forEach(pmesh => {
      pmesh.children.forEach(child => {
        if(child.userData.isTextNode) {
          pmesh.remove(child);
        }
      })
    });
    this._textMap.clear();
  }

  public animate() {
    if (this.currentFrame < this.duration) {
      this.currentFrame++;
      this._rotate();
      return true;
    } else if (this.currentFrame >= this.duration) {
      this._initRotateInfoMap.clear();
      this._resetText();
    }
    return false;
  }
}