import * as THREE from 'three'
import React, { Component } from 'react'
import { AppCanvas } from '../app/app-interface.js';
import { OrbitControls } from '../../static/js/orbitcontrol.js';

export default class AppScene extends Component<{ onDidMount: (a: AppCanvas) => void }, any> {
 
  constructor(props: any) {
    super(props);
    this.initScene = this.initScene.bind(this);
  }

  public initScene(container: HTMLElement) {

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

    const helper = new THREE.GridHelper( 2000, 100 );
    helper.position.y = - 199;
    if (helper.material instanceof THREE.Material) {
      helper.material.opacity = 0.25;
      helper.material.transparent = true;
    }
    scene.add( helper );

    const camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 0, 250, 1000 );
    camera.lookAt(new THREE.Vector3(0, 0, -1));
    camera.rotation.copy(new THREE.Euler())
    scene.add( camera );

    const renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    container.appendChild( renderer.domElement );

    const controls: any = new OrbitControls( camera, renderer.domElement );
    controls.damping = 0.2;
    controls.addEventListener('change', () => {
      renderer.render( scene, camera );
    });

    document.addEventListener('keydown', this.onKeyDown.bind(this));

    this.props.onDidMount({ scene, camera, renderer, grhelper: helper });
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



  componentDidMount = () => {
    const container = document.getElementById('app-canvas');
    if (container) {
      this.initScene(container);

    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }
  
  render() {
    return (
      <div id="app-canvas" />
    )
  }
}
