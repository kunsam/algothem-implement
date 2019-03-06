import { Modal } from 'antd';
import * as THREE from 'three'
import * as React from 'react'
import 'antd/lib/modal/style/index.css';
import AppLayout from '../../layouts/app/app';
import ObjectInspector from 'react-object-inspector';
import FontManager from '../../src/view/font/font-manager';
import { RBNode } from '../../src/tree/node/red-black-node';
import { AppEventType } from '../../src/core/event-manager';
import { RedBlackTree } from '../../src/tree/red-black-tree';
import { App, AppCanvas } from '../../layouts/app/app-interface';
import { RedBlackTreeViewObject } from '../../src/view/tree/red-black-tree-viewobject';
import RBPControlPanel from '../../components/control-panel/red-black-page-control-panel';

export enum IRedBlackTreeEventType{
  onFind = 'onFind',
  onInsert = 'ONINSERT',
  onDelete = 'onDelete',
  onLeftRotate = 'onLeftRotate',
  onRightRotate = 'onRightRotate',
}

export class RedBlackTreePage extends React.Component<{app: App}> {
  public _redBlackTreeViewObject: RedBlackTreeViewObject | undefined;

  public initEvent(redBlackTreeViewObject: RedBlackTreeViewObject) {
    if (!this.props.app.canvas) {
      throw new Error('this.props.app.canvas')
    }

    const eventManager = this.props.app.eventManager;
    eventManager.listen(IRedBlackTreeEventType.onInsert, (key: number) => {
      redBlackTreeViewObject.insert(key);
    });
    eventManager.listen(IRedBlackTreeEventType.onDelete, (key: number) => {
      redBlackTreeViewObject.delete(key);
    });
    eventManager.listen(IRedBlackTreeEventType.onFind, (key: number) => {
      redBlackTreeViewObject.search(key);
    });

    const { grhelper, renderer, camera } = this.props.app.canvas;
    eventManager.listen(AppEventType.renderFrame, () => {
      redBlackTreeViewObject.update();
      const maxDepthViewObject = redBlackTreeViewObject.getMaxDepthNodeViewObject();
      if (maxDepthViewObject) {
        grhelper.position.y = maxDepthViewObject.position.y - 200;
      }
    });

    const raycaster = new THREE.Raycaster();
    renderer.domElement.addEventListener('click', raycast, false );
    function raycast ( e: MouseEvent ) {
      raycaster.setFromCamera({
        x: ( e.clientX / window.innerWidth ) * 2 - 1,
        y: - ( e.clientY / window.innerHeight ) * 2 + 1,
      }, camera );
      if (redBlackTreeViewObject.children) {
        const intersects = raycaster.intersectObjects( redBlackTreeViewObject.children, true );
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
  }

  public initTree(app: App, canvas: AppCanvas) {

    const redblacktree = new RedBlackTree();
    redblacktree.insert(50);
    redblacktree.insert(30);
    redblacktree.insert(42);
    redblacktree.insert(20);
    redblacktree.insert(18);
    redblacktree.insert(26);
    redblacktree.insert(50);
    redblacktree.insert(82);

    FontManager.getFontAsync('helv').then(() => {
      this._redBlackTreeViewObject = new RedBlackTreeViewObject(app, redblacktree);
      canvas.scene.add(this._redBlackTreeViewObject);
      this.initEvent(this._redBlackTreeViewObject);
    });

  }
  componentDidMount() {

    if (this.props.app && this.props.app.canvas) {
      this.initTree(this.props.app, this.props.app.canvas)
    }

  }

  render() {
    return (
      <div />
    )
  }
 }


export default class RedBlackTreeContainer extends React.Component<any, { app?: App }> {

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
              <div id="control-header" style={{ position: 'fixed' }}>
                <RBPControlPanel app={app} />
              </div>
              <RedBlackTreePage app={app} />
            </div>
          ) : null
        }
      </AppLayout>
    )
  }
}

