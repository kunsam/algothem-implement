

import "./app.less"
import * as THREE from 'three';
import * as React from 'react'
import AppScene from "../scene/scene";
import { AppCanvas } from "./app-interface";
import FontManager from "../../src/view/font/font-manager";
import { EventManager } from "../../src/core/event/event-manager";
import { AppBaseEventType } from "../../src/core/contants/events";
import { EventContext } from "../../src/core/event/context/event-context";


export class AppBase {
  canvas?: AppCanvas;
  protected _eventMgr: EventManager;
  constructor() {
    this._eventMgr = new EventManager(this);
    this._eventMgr.init();
  }
  public get eventManager() {
    return this._eventMgr;
  }
}


export default class AppLayout extends React.Component<{ onSceneLoaded: (a: App) => void }, any> {

  public app: AppBase;

  constructor(props: any) {
    super(props);
    this.app = new AppBase();
    this.state = {
      sceneLoaded: false,
    }
  }

  componentWillMount() {
    FontManager.registerdFrontPathMap.set('helv', '/static/helv-font.json');
  }

  componentDidMount = () => {
    document.addEventListener('keydown', (e :KeyboardEvent) => {
      // this.app.eventManager.keyBoardEvent.emitKeyDowm(e);
    })

  }
  
  public onSceneLoaded = (canvas: AppCanvas) => {
    this.app.canvas = canvas;
    this.renderFrame();
    this.setState({ sceneLoaded: true });
    this.props.onSceneLoaded(this.app);
    document.addEventListener('keydown', this.onKeyDown.bind(this));
  }

  public renderFrame() {
    if (!this.app.canvas) {
      return;
    }
    // 相机情况根据节点数量进行调整
    // 网格helper更新为叶节点下面的位置
    requestAnimationFrame( this.renderFrame.bind(this) );
    const { renderer, scene, camera } = this.app.canvas;
    renderer.render( scene, camera );
    this.app.eventManager.appEvents().emit(
      AppBaseEventType.renderFrame, new EventContext({}, this.app)
    );
  }

  public onKeyDown(e: KeyboardEvent) {
    const camera = this.app.canvas && this.app.canvas.camera;
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

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  render() {
    const { sceneLoaded } = this.state;
    return (
      <div id="AppLayout">
        { sceneLoaded ? this.props.children : null }
        <AppScene onDidMount={this.onSceneLoaded.bind(this)}/>
      </div>
    )
  }
}