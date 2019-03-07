import * as THREE from 'three';
import { BasicTreeNode } from './../../../tree/node/basic-node';


export enum MeshType {
  node = 'node',
  text = 'text',
  line = 'line',
}

export type NBasicNodeViewobject = BasicNodeViewobject | undefined;



export default class BasicNodeViewobject extends THREE.Object3D {

  public node: BasicTreeNode;
  public cloneNode?: BasicTreeNode; // for animation

  public lineMesh?: THREE.Line;
  public nodeMesh: THREE.Mesh = new THREE.Mesh();
  public textMesh: THREE.Mesh = new THREE.Mesh();

  private _oldNodeColor: THREE.Color;

  public static verticalOffset = 160;
  public static horizontalOffset = 80;
  public static originPosition = new THREE.Vector3(0, 400, 0);

  private _left: NBasicNodeViewobject;
  private _right: NBasicNodeViewobject;
  private _parent: NBasicNodeViewobject;
  public lastParent?: NBasicNodeViewobject;

  constructor(node: BasicTreeNode, font: THREE.Font) {
    super();
    this.node = node;
    this.getSphereNode();
    node.key && this.getTextMesh(node.key, font);
    this.add(this.nodeMesh);
    this.add(this.textMesh);
    this.refresh();
    this._oldNodeColor = (this.nodeMesh.material as THREE.MeshPhongMaterial).color.clone();
  }

  public withDirtyWork (node: NBasicNodeViewobject, func: Function) {
    if (!node) {}
    func();
    if(node) {
      // 如果赋值节点是当前的父节点，解除父子关系
      if (this.vparent === node) {
        if (this.vparent.left === node) {
          this.vparent.left = undefined;
        }
        if (this.vparent.right === node) {
          this.vparent.right = undefined;
        }
        this._parent = undefined;
      }
      node._parent = this;
    }
  }

  public get left(): NBasicNodeViewobject{
    return this._left;
  }

  public set left(vo: NBasicNodeViewobject) {
    this.withDirtyWork(vo, () => {
      this._left = vo;
    });
  }

  public get right(): NBasicNodeViewobject{
    return this._right;
  }

  public set right(vo: NBasicNodeViewobject) {
    this.withDirtyWork(vo, () => {
      this._right = vo;
    });
  }

  public get vparent(): NBasicNodeViewobject{
    return this._parent;
  }

  public set vparent(vo: NBasicNodeViewobject){
    this._parent = vo;
  }

  public changeColor(color: number) {
    (this.nodeMesh.material as THREE.MeshPhongMaterial).color.setHex(color);
  }

  public resetColor() {
    (this.nodeMesh.material as THREE.MeshPhongMaterial).color = this._oldNodeColor;
  }

  public getParentPosition(parent?: NBasicNodeViewobject) {
    const vparent = parent || this.vparent;
    return vparent && vparent.position;
  }

  public getSphereNode() {
    const geometry = new THREE.SphereGeometry( 30, 30, 30 );
    const mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({
      color: 0x000000,
    }));
    mesh.userData.type = MeshType.node;
    mesh.userData.node = this.node;
    this.nodeMesh = mesh;
  }

  public getTextMesh(key: number, font: THREE.Font) {
    const textGeo = new THREE.TextGeometry(`${key}`, {
      height: 0,
      size: 20,
      font: font,
    });
    const text = new THREE.Mesh(
      textGeo,
      new THREE.MeshBasicMaterial({ color: 0x000000 })
    );
    text.position.y += 50;
    text.position.x -= 20;
    text.userData.type = MeshType.text;
    this.textMesh = text;
  }

  public getConnectLineToParent(connectToPoition?: THREE.Vector3) {
    if (!connectToPoition) {
      connectToPoition = this.getParentPosition();
    }
    if (!connectToPoition) {
      if (this.lineMesh) {
        this.remove(this.lineMesh)
        this.lineMesh = undefined;
      }
      return;
    }
    connectToPoition = new THREE.Vector3().subVectors(connectToPoition!, this.position);
    const geometry = new THREE.Geometry();
    geometry.vertices.push(
      new THREE.Vector3(),
      connectToPoition,
    );
    const line = new THREE.Line( geometry, new THREE.LineBasicMaterial({
      color: 0x000000,
    }));
    line.userData.type = MeshType.line;
    this.lineMesh = line;
  }

  public updatePosition(position: THREE.Vector3) {
    this.position.copy(position);
    this.node.userData.position = position;
    this.refreshLineMesh();
  }

  public refresh() {
    // console.log(`refresh${this.node.key}`);
    this.updatePosition(this.getPositionFromParent());
  }

  public connectToOther(parent: BasicNodeViewobject) {
    const parentPosition = this.getParentPosition(parent);
    this.refreshLineMesh(parentPosition)
  }

  public refreshLineMesh(connectToPoition?: THREE.Vector3) {
    if (this.lineMesh) {
      this.remove(this.lineMesh);
    }
    this.getConnectLineToParent(connectToPoition);
    if (this.lineMesh) {
      this.add(this.lineMesh);
    }
  }

  public getPositionFromParent(parent?: NBasicNodeViewobject, isLeft?: boolean) {
    const rbNode: BasicTreeNode = this.node;
    const parentPosition = this.getParentPosition(parent);
    if (!parentPosition) {
      return BasicNodeViewobject.originPosition;
    }
    const position = parentPosition.clone();
    position.y -= BasicNodeViewobject.verticalOffset;
    if (isLeft || rbNode.isOnLeft()) {
      position.x -= BasicNodeViewobject.horizontalOffset;
      if (rbNode.sibling && rbNode.hasChild()) {
        position.x -= BasicNodeViewobject.horizontalOffset;
      }
    } else {
      position.x += BasicNodeViewobject.horizontalOffset;
      if (rbNode.sibling && rbNode.hasChild()) {
        position.x += BasicNodeViewobject.horizontalOffset;
      }
    }
    return position;
  }
}