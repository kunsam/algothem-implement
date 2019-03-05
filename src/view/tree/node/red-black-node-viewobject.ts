import * as THREE from 'three';
import BasicNodeViewobject, { MeshType } from './basic-node-viewobject';
import { RBColor, RBNode } from './../../../tree/node/red-black-node';

export default class RedBlackNodeViewObject extends BasicNodeViewobject {

  constructor(node: RBNode, font: THREE.Font, map?: Map<number, RedBlackNodeViewObject>) {
    super(node, font, map);
  }

  public getSphereNode() {
    const node = this.node as RBNode;
    const geometry = new THREE.SphereGeometry( 30, 30, 30 );
    const material = new THREE.MeshPhongMaterial({
      color: node.color === RBColor.black ? 0x000000 : 0xff0000
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.userData.type = MeshType.node;
    mesh.userData.node = this.node;
    this.nodeMesh = mesh;
  }

}