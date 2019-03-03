import { Modal } from 'antd';
import 'antd/lib/modal/style/index.css';
import * as THREE from 'three'
import * as React from 'react'
import AppLayout from '../../layouts/app';
import ObjectInspector from 'react-object-inspector';
import EventManager from '../../src/core/event-manager';
import { ControlPanel } from '../../components/control-panel';
import { OrbitControls } from '../../static/js/orbitcontrol.js';
import { RedBlackTree, RBNode } from '../../src/tree/red-black-tree';
import { RedBlackTreeViewObject } from '../../src/view/tree/red-black-tree-viewobject';
import FontManager from '../../src/view/font/font-manager';

export class RedBlackTreePage extends React.Component<{app: App}> {

  public camera?: THREE.PerspectiveCamera;
  public _redBlackTreeViewObject: RedBlackTreeViewObject | undefined;

  componentWillMount() {
    FontManager.registerdFrontPathMap.set('helv', '/static/helv-font.json');
  }
  
  public initScene() {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );

    scene.add( new THREE.AmbientLight( 0xf0f0f0 ) );

    const light = new THREE.SpotLight( 0xffffff, 1.5 );
    light.position.set( 0, 1500, 200 );
    light.castShadow = true;
    const lshadow = new THREE.LightShadow( new THREE.PerspectiveCamera( 70, 1, 200, 2000 ) );
    light.shadow = lshadow;
  
    light.shadow.bias = - 0.000222;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    scene.add( light );

    var planeGeometry = new THREE.PlaneBufferGeometry( 2000, 2000 );
    planeGeometry.rotateX( - Math.PI / 2 );
    var planeMaterial = new THREE.ShadowMaterial( { opacity: 0.2 } );
    var plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.position.y = - 200;
    plane.receiveShadow = true;
    scene.add( plane );

    var helper = new THREE.GridHelper( 2000, 100 );
    helper.position.y = - 199;
    if (helper.material instanceof THREE.Material) {
      helper.material.opacity = 0.25;
      helper.material.transparent = true;
    }
    scene.add( helper );
    return scene;
  }

  public initTree() {
    const treeContainer = new THREE.Object3D();
    const redblacktree = new RedBlackTree();
    redblacktree.insert(50);
    redblacktree.insert(30);
    redblacktree.insert(42);
    redblacktree.insert(18);
    redblacktree.insert(26);
    redblacktree.insert(50);
    redblacktree.insert(82);

    FontManager.getFontAsync('helv').then(() => {
      this._redBlackTreeViewObject = new RedBlackTreeViewObject(this.props.app, redblacktree);
      treeContainer.add(this._redBlackTreeViewObject);
      this.props.app.eventManager.listenInsertKey((key) => {
        this._redBlackTreeViewObject!.insert(key);
      });
      this.props.app.eventManager.listenDeleteKey((key) => {
        this._redBlackTreeViewObject!.delete(key);
      });
      this.props.app.eventManager.listenFindKey((key) => {
        this._redBlackTreeViewObject!.search(key);
      });
      this.props.app.eventManager.listenLeftRotate((key) => {
        this._redBlackTreeViewObject!.rotate(key, true);
      });
      this.props.app.eventManager.listenRightRotate((key) => {
        this._redBlackTreeViewObject!.rotate(key);
      });
    });
    return treeContainer;
  }

  componentDidMount() {
    const container = document.getElementById('rb-container' );
    if (!container) {
      return;
    }

    const scene = this.initScene();

    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 0, 250, 1000 );
    camera.lookAt(new THREE.Vector3(0, 0, -1));
    camera.rotation.copy(new THREE.Euler())
    this.camera = camera;
    scene.add( camera );

    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    container.appendChild( renderer.domElement );

    const controls: any = new OrbitControls( camera, renderer.domElement );
    controls.damping = 0.2;
    controls.addEventListener( 'change', () => {
      renderer.render( scene, camera );
    });
  
    const tree = this.initTree();
    scene.add( tree );
  
    const raycaster = new THREE.Raycaster();
    renderer.domElement.addEventListener('click', raycast, false );
    function raycast ( e: MouseEvent ) {
      raycaster.setFromCamera({
        x: ( e.clientX / window.innerWidth ) * 2 - 1,
        y: - ( e.clientY / window.innerHeight ) * 2 + 1,
      }, camera );
      if (tree.children[0] && tree.children[0].children) {
        const intersects = raycaster.intersectObjects( tree.children[0].children, true );
        const findNode = intersects.find(i => i.object.userData.node);
        if (findNode && findNode.object.userData.node) {
          const node = findNode.object.userData.node as RBNode;
          Modal.info({
            title: `node: ${node.key}`,
            content: (<div><ObjectInspector data={node} /></div>)
          });
        }
      }
    }

    animate();
    document.addEventListener('keydown', this.onKeyDown.bind(this));

    const scope = this;
    function animate() {
      // 相机情况根据节点数量进行调整
      // 网格helper更新为叶节点下面的位置
      requestAnimationFrame( animate );
      if (scope && scope._redBlackTreeViewObject) {
        scope._redBlackTreeViewObject.update();
      }
      renderer.render( scene, camera );
    }
    
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }


  public onKeyDown(e: KeyboardEvent) {
    const camera = this.camera;
    if (!camera) return;
    const OFFSET = 10;
    const cameraDirection = camera.getWorldDirection(new THREE.Vector3()).normalize();
    switch (e.keyCode) {
      case 87: { // w
        camera.position.add(cameraDirection.clone().multiplyScalar(OFFSET));
        break;
      }
      case 83: { // s
        camera.position.add(cameraDirection.clone().multiplyScalar(-OFFSET));
        break;
      }
      case 65: { // a
        const crossVector = cameraDirection.clone().cross(new THREE.Vector3(0, 1, 0));
        camera.position.add(
          crossVector.normalize().multiplyScalar(-OFFSET)
        );
        break;
      }
      case 68: { // d
        const crossVector = cameraDirection.clone().cross(new THREE.Vector3(0, 1, 0));
        camera.position.add(
          crossVector.normalize().multiplyScalar(OFFSET)
        );
        break;
      }
    }
  }

  render() {
    return (
      <div id="rb-container" />
    )
  }
 }


 
export interface App{
  eventManager: EventManager;
}

export default class redBlackTree extends React.Component {
  private _eventManager: EventManager = new EventManager();
  render() {
    const app = {
      eventManager: this._eventManager,
    }
    return (
      <AppLayout>
        <div id="control-header" style={{ position: 'fixed' }}>
          <ControlPanel app={app} />
        </div>
        <RedBlackTreePage app={app} />
      </AppLayout>
    )
  }
}

