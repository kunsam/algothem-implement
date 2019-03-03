import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { RBNode } from "../../../tree/red-black-tree";

export default class SwapKeyAnimator extends AnimatorBase {

  public node2: RBNode;
  private _node1Mesh: THREE.Mesh;
  private _node2Mesh: THREE.Mesh;

  private _node1TextMesh?: THREE.Object3D;
  private _node2TextMesh?: THREE.Object3D;

  private _node1TextInitMesh?: THREE.Object3D;
  private _node2TextInitMesh?: THREE.Object3D;

  private _initOffset: THREE.Vector3;

  constructor(node1: RBNode, node2: RBNode, node1Mesh: THREE.Mesh, node2Mesh: THREE.Mesh, duration?: number) {
    super(node1, duration);
    this.node2 = node2;
    this._node1Mesh = node1Mesh;
    this._node2Mesh = node2Mesh;

    this._node1Mesh.children.every(c => {
      if(c.userData.isKeyText) {
        this._node1TextMesh = c;
        this._node1TextInitMesh = c.clone();
      }
      return c.userData.isKeyText;
    });
    this._node2Mesh.children.every(c => {
      if(c.userData.isKeyText) {
        this._node2TextMesh = c;
        this._node2TextInitMesh = c.clone();
      }
      return c.userData.isKeyText;
    });

    this._initOffset = new THREE.Vector3().subVectors(
      node1Mesh.position,
      node2Mesh.position,
    );
  }

  private _moveText() {
    if (!this._node1TextMesh || !this._node2TextMesh) {
      return;
    }
    
    this._node1TextMesh.position.copy(
      this._node1TextInitMesh!.position.clone().add(
        this._initOffset.clone().normalize().multiplyScalar(
          -1 * this.currentFrame * this._initOffset.length() / this.duration
        )
      )
    );

    this._node2TextMesh.position.copy(
      this._node1TextInitMesh!.position.clone().add(
        this._initOffset.clone().normalize().multiplyScalar(
          this.currentFrame * this._initOffset.length() / this.duration
        )
      )
    );

  }

  private _swapText() {
    if (!this._node1TextMesh || !this._node2TextMesh) {
      return;
    }

    this._node1Mesh.remove(this._node1TextMesh);
    this._node1Mesh.add(this._node2TextInitMesh!);

    this._node2Mesh.remove(this._node2TextMesh);
    this._node2Mesh.add(this._node1TextInitMesh!);

  }

  public animate() {
    if (this.currentFrame < this.duration) {
      this.currentFrame++;
      this._moveText();
      return true;
    }
    this._swapText();
    return false;
  }
}