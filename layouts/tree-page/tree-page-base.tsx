

import './tree-page.less'
import 'antd/lib/modal/style/index.css';

import { Modal } from 'antd';
import * as THREE from 'three'
import * as React from 'react'
import AppLayout from '../app/app';
import ObjectInspector from 'react-object-inspector';
import { App, AppCanvas } from '../app/app-interface';
import FontManager from '../../src/view/font/font-manager';
import { AppEventType } from '../../src/core/event-manager';
import { BasicBinaryTree } from '../../src/tree/basic-binary-tree';
import { BinaryTreeViewObject } from '../../src/view/tree/binary-tree-viewobject';
import BinartTreePageControlPanel from '../../components/control-panel/binary-tree-control-panel';
import BinaryTreeInfoPanel from '../../components/info-panel/baisc-binary-tree/baisc-binary-tree-info-panel';


export interface ITreeEvent {
  eventType: string;
  listener: (tree: BinaryTreeViewObject, ...args: any[]) => void;
}


export function WithTreePageBase() {
  return class extends React.Component<{app: App}> {
    // public treeViewObject: BinaryTreeViewObject | undefined;
    protected getEvent(): ITreeEvent[] {
      return []
    }
    protected getTree(): BasicBinaryTree {
      const tree = new BasicBinaryTree();
      return tree;
    }
    protected createTreeViewObject(app: App): BinaryTreeViewObject {
      return new BinaryTreeViewObject(app, this.getTree());
    }
    protected getInfoPanel() {
      return <BinaryTreeInfoPanel />
    }
    protected getControlPanel(app: App) {
      return <BinartTreePageControlPanel app={app} />
    }
    private _initEvent(treeViewObject: BinaryTreeViewObject, ) {
      if (!this.props.app.canvas) {
        throw new Error('this.props.app.canvas')
      }
      const eventManager = this.props.app.eventManager;
      this.getEvent().forEach(data => {
        eventManager.listen(data.eventType, (...args: []) => {
          data.listener(treeViewObject, ...args);
        });
      })
      const { renderer, camera } = this.props.app.canvas;
      eventManager.listen(AppEventType.renderFrame, () => {
        treeViewObject.update();
        this.onRenderFrame(treeViewObject, this.props.app.canvas!);
      });
      const raycaster = new THREE.Raycaster();
      renderer.domElement.addEventListener('click', raycast, false );
      function raycast ( e: MouseEvent ) {
        raycaster.setFromCamera({
          x: ( e.clientX / window.innerWidth ) * 2 - 1,
          y: - ( e.clientY / window.innerHeight ) * 2 + 1,
        }, camera );
        if (treeViewObject.children) {
          const intersects = raycaster.intersectObjects( treeViewObject.children, true );
          const findNode = intersects.find(i => i.object.userData.node);
          if (findNode && findNode.object.userData.node) {
            const node = findNode.object.userData.node;
            Modal.info({
              title: `node: ${node.key}`,
              content: (<div><ObjectInspector data={node} /></div>)
            });
          }
  
        }
      }
    }
    private _initTree(app: App, canvas: AppCanvas) {
      FontManager.getFontAsync('helv').then(() => {
        const treeViewObject = this.createTreeViewObject(app);
        canvas.scene.add(treeViewObject);
        this._initEvent(treeViewObject);
      });
    }
    protected onRenderFrame: (treevo: BinaryTreeViewObject, canvas: AppCanvas) => void = () => {};
    componentDidMount() {
      if (this.props.app && this.props.app.canvas) {
        this._initTree(this.props.app, this.props.app.canvas)
      }
    }
    render() {
      return (
        <div>
          <div id="control-header" style={{ position: 'fixed' }}>
            {this.getControlPanel(this.props.app)}
          </div>
          <div id="info-panel-bottom" style={{ position: 'fixed', bottom: 0 }}>
            {this.getInfoPanel()}
          </div>
        </div>
      )
    }
  }
}


export function WithTreeContaier(TreePage: React.ComponentClass<any, any>) {
  return class extends React.Component<any, { app?: App }> {
    constructor(props: any) {
      super(props);
      this.state = { app: undefined }
    }
    render() {
      const { app } = this.state;
      return (
        <AppLayout onSceneLoaded={(app: App) => this.setState({ app }) }>
          {
            app ? (
              <div>
                <TreePage app={app} />
              </div>
            ) : null
          }
        </AppLayout>
      )
    }
  }
}

