import * as THREE from 'three';
import { NRBNode, RBColor } from './../../../tree/red-black-tree';

export function getSphereNode(node: NRBNode, font: THREE.Font): THREE.Mesh | undefined {
  if (node === null) {
    return;
  }
  var geometry = new THREE.SphereGeometry( 30, 30, 30 );
  var material = new THREE.MeshPhongMaterial({
    color: node.color === RBColor.black ? 0x000000 : 0xff0000
  });
  const mesh = new THREE.Mesh( geometry, material );
  if (font) {
    const textGeo = new THREE.TextGeometry(`${node.key}`, {
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
    text.userData.isKeyText = true;
    mesh.add(text);
  }
  mesh.userData.node = node;
  return mesh;
}

export function getConnectLineMesh(sphereNode: THREE.Mesh): THREE.Line | undefined {

  const parent = sphereNode.userData.node && sphereNode.userData.node.parent;
  const parentPosition = parent && parent.userData.position;

  if (!parentPosition) {
    return;
  }
  var geometry = new THREE.Geometry();
  geometry.vertices.push(
    new THREE.Vector3(),
    new THREE.Vector3().subVectors(parentPosition, sphereNode.position)
  );
  var line = new THREE.Line( geometry, new THREE.LineBasicMaterial({
    color: 0x000000,
  }));
  return line;
}