import * as THREE from 'three';
import AnimatorBase from "./animator-base";
import { RBNode } from "../../../tree/red-black-tree";

export default class SwapKeyAnimator extends AnimatorBase {

  public node2: RBNode;
  private _node1Mesh: THREE.Mesh;
  private _node2Mesh: THREE.Mesh;

  private _node1InitMesh: THREE.Mesh;
  private _node2InitMesh: THREE.Mesh;

  private _initOffset: THREE.Vector3;

  constructor(node1: RBNode, node2: RBNode, node1Mesh: THREE.Mesh, node2Mesh: THREE.Mesh, duration?: number) {
    super(node1, duration);
    this.node2 = node2;
    this.currentFrame = 0;
    this._node1Mesh = node1Mesh;
    this._node2Mesh = node2Mesh;
    this._node1InitMesh = node1Mesh.clone();
    this._node2InitMesh = node2Mesh.clone();
    this._initOffset = new THREE.Vector3().subVectors(node1Mesh.position, node2Mesh.position);
  }

  private _moveText() {
    this._node1Mesh.children.every(c => {
      if(c.userData.isKeyText) {
        c.position.copy(
          this._node1InitMesh.position.clone().add(
            this._initOffset.clone().normalize().multiplyScalar(
              -1 * this.currentFrame * this._initOffset.length() / this.duration
            )
          )
        )
      }
      return !c.userData.isKeyText;
    });

    this._node2Mesh.children.every(c => {
      if (c.userData.isKeyText) {
        c.position.copy(
          this._node2InitMesh.position.clone().add(
            this._initOffset.clone().normalize().multiplyScalar(
              this.currentFrame * this._initOffset.length() / this.duration
            )
          )
        )
      }
      return !c.userData.isKeyText;
    });
  }

  private _swapText() {
    this._node1Mesh.children.every(c => {
      if(c.userData.isKeyText) {
        this._node1Mesh.remove(c);
        const newChild = this._node2InitMesh.clone();
        newChild.position.copy(this._node1InitMesh.position);
        this._node1Mesh.add(newChild);
      }
      return !c.userData.isKeyText;
    });

    this._node2Mesh.children.every(c => {
      if(c.userData.isKeyText) {
        this._node2Mesh.remove(c);
        const newChild = this._node1InitMesh.clone();
        newChild.position.copy(this._node2InitMesh.position);
        this._node1Mesh.add(newChild);
      }
      return !c.userData.isKeyText;
    });
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