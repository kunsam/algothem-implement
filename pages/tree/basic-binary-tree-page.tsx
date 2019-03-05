import { Modal } from 'antd';
import * as React from 'react'
import * as THREE from 'three'
import 'antd/lib/modal/style/index.css';
import AppLayout from '../../layouts/app/app';
import ObjectInspector from 'react-object-inspector';
import { App, AppCanvas } from '../../layouts/app/app-interface';
import FontManager from '../../src/view/font/font-manager';
import { RBNode } from '../../src/tree/node/red-black-node';
import { RedBlackTree } from '../../src/tree/red-black-tree';
import { ControlPanel } from '../../components/red-black-page/control-panel';
import { RedBlackTreeViewObject } from '../../src/view/tree/red-black-tree-viewobject';
import { AppEventType } from '../../src/core/event-manager';
import { BinaryTreeViewObject } from '../../src/view/tree/binary-tree-viewobject';
import { BinarySearchTree } from '../../src/tree/binary-search-tree';


export enum IBasicTreeEventType{
  onFind = 'onFind',
  onInsert = 'ONINSERT',
  onDelete = 'onDelete',
  onLeftRotate = 'onLeftRotate',
  onRightRotate = 'onRightRotate',
}

export class BinaryTreePage extends React.Component<{app: App}> {
  public treeViewObject: BinaryTreeViewObject | undefined;

  public initEvent(treeViewObject: BinaryTreeViewObject) {
    if (!this.props.app.canvas) {
      throw new Error('this.props.app.canvas')
    }

    const eventManager = this.props.app.eventManager;
    eventManager.listen(IBasicTreeEventType.onInsert, (key: number) => {
      treeViewObject.insert(key);
    });
    eventManager.listen(IBasicTreeEventType.onDelete, (key: number) => {
      // treeViewObject.delete(key);
    });
    eventManager.listen(IBasicTreeEventType.onFind, (key: number) => {
      // treeViewObject.search(key);
    });

    const { renderer, camera } = this.props.app.canvas;
    eventManager.listen(AppEventType.renderFrame, () => {
      treeViewObject.update();
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

    const tree = new BinarySearchTree();
    tree.insert(50);
    tree.insert(30);
    tree.insert(42);
    tree.insert(20);
    tree.insert(18);
    tree.insert(26);
    tree.insert(50);
    tree.insert(82);

    FontManager.getFontAsync('helv').then(() => {
      this.treeViewObject = new BinaryTreeViewObject(app, tree);
      canvas.scene.add(this.treeViewObject);
      this.initEvent(this.treeViewObject);
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


export default class BinaryTreeContainer extends React.Component<any, { app?: App }> {

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
                <ControlPanel app={app} />
              </div>
              <BinaryTreePage app={app} />
            </div>
          ) : null
        }
      </AppLayout>
    )
  }
}

