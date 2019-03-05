import * as THREE from 'three';
import { BasicTreeNode } from './../../../tree/node/basic-node';


export enum MeshType {
  node = 'node',
  text = 'text',
  line = 'line',
}
export default class BasicNodeViewobject extends THREE.Object3D {

  public node: BasicTreeNode;
  public cloneNode?: BasicTreeNode; // for animation

  public nodeMesh: THREE.Mesh = new THREE.Mesh();
  public textMesh: THREE.Mesh = new THREE.Mesh();
  public lineMesh?: THREE.Line;

  public static verticalOffset = 160;
  public static horizontalOffset = 80;
  public static originPosition = new THREE.Vector3(0, 400, 0);
  // private _onUpdate: VisitNodeFunction
  constructor(node: BasicTreeNode, font: THREE.Font) {
    super();
    this.node = node;
    this.getSphereNode();
    this.getTextMesh(node.key, font);
    this.add(this.nodeMesh);
    this.add(this.textMesh);
    this.refresh();
  }

  public getParentPosition() {
    const gp = (node?: BasicTreeNode) => node && node.parent && node.parent.userData.position;
    return gp(this.cloneNode) || gp(this.node);
  }

  public getNodePosition(): THREE.Vector3 {
    const node = this.node;
    const position = BasicNodeViewobject.getChildPosition(node, this.getParentPosition());
    node.userData.position = position;
    return position;
  }

  public getSphereNode() {
    const geometry = new THREE.SphereGeometry( 30, 30, 30 );
    const mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({
      color: 0x808080,
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

  public getConnectLineToParent() {
    const position = this.position;
    const vparentPosition = this.getParentPosition();
    if (!vparentPosition) {
      return;
    }
    var geometry = new THREE.Geometry();
    geometry.vertices.push(
      new THREE.Vector3(),
      new THREE.Vector3().subVectors(vparentPosition, position)
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
    if (this.cloneNode) {
      this.cloneNode.userData.position = position;
    }
    this.refreshLineMesh();
  }

  public refresh() {
    this.updatePosition(this.getNodePosition());
  }

  public refreshLineMesh() {
    if (this.lineMesh) {
      this.remove(this.lineMesh);
    }
    this.getConnectLineToParent();
    if (this.lineMesh) {
      this.add(this.lineMesh);
    }
  }

  public static getChildPosition(rbNode: BasicTreeNode, parentPosition: THREE.Vector3) {
    if (!parentPosition) {
      return BasicNodeViewobject.originPosition;
    } else {
      const position = parentPosition.clone();
      position.y -= BasicNodeViewobject.verticalOffset;
      if (rbNode.isOnLeft()) {
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
}