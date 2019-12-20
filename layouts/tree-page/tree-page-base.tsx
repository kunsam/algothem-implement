import "./tree-page.less";
import { Modal } from "antd";
import * as React from "react";
import * as THREE from "three";
import AppLayout, { AppBase } from "../app/app";
import { AppCanvas } from "../app/app-interface";
// import { ObjectInspector } from 'react-inspector';
import FontManager from "../../src/view/font/font-manager";
import { EventManager } from "../../src/core/event/event-manager";
import { AppBaseEventType } from "../../src/core/contants/events";
import { BasicBinaryTree } from "../../src/tree/basic-binary-tree";
import { BinaryTreeViewObject } from "../../src/view/tree/binary-tree-viewobject";
import BinartTreePageControlPanel from "../../components/control-panel/binary-tree-control-panel";
import BinaryTreeInfoPanel from "../../components/info-panel/baisc-binary-tree/baisc-binary-tree-info-panel";
import { EventContext } from "../../src/core/event/context/event-context";

export interface ITreeEvent {
  eventType: string;
  listener: (tree: BinaryTreeViewObject, ...args: any[]) => void;
}

export function WithTreePageBase() {
  return class extends React.Component<{ app: AppBase }> {
    // public treeViewObject: BinaryTreeViewObject | undefined;
    protected getEvent(): ITreeEvent[] {
      return [];
    }
    protected getTree(): BasicBinaryTree {
      const tree = new BasicBinaryTree();
      return tree;
    }
    protected createTreeViewObject(app: AppBase): BinaryTreeViewObject {
      return new BinaryTreeViewObject(app, this.getTree());
    }
    protected getInfoPanel() {
      return <BinaryTreeInfoPanel />;
    }
    protected getControlPanel(app: AppBase) {
      return <BinartTreePageControlPanel app={app} />;
    }
    private _initEvent(treeViewObject: BinaryTreeViewObject) {
      if (!this.props.app.canvas) {
        throw new Error("this.props.app.canvas");
      }
      const eventManager: EventManager = this.props.app.eventManager;
      this.getEvent().forEach(data => {
        eventManager
          .commandEvents()
          .listen(data.eventType, (context: EventContext) => {
            data.listener(treeViewObject, context.args);
          });
      });
      const { renderer, camera } = this.props.app.canvas;
      eventManager.appEvents().listen(AppBaseEventType.renderFrame, () => {
        treeViewObject.update();
        this.onRenderFrame(treeViewObject, this.props.app.canvas!);
      });
      const raycaster = new THREE.Raycaster();
      renderer.domElement.addEventListener("click", raycast, false);
      function raycast(e: MouseEvent) {
        raycaster.setFromCamera(
          {
            x: (e.clientX / window.innerWidth) * 2 - 1,
            y: -(e.clientY / window.innerHeight) * 2 + 1
          },
          camera
        );
        if (treeViewObject.children) {
          const intersects = raycaster.intersectObjects(
            treeViewObject.children,
            true
          );
          const findNode = intersects.find(i => i.object.userData.node);
          if (findNode && findNode.object.userData.node) {
            const node = findNode.object.userData.node;
            console.log(node, "nodenode");
            Modal.info({
              title: `node: ${node.key}`,
              content: <div>ObjectInspector</div>
            });
          }
        }
      }
    }
    private _initTree(app: AppBase, canvas: AppCanvas) {
      FontManager.getFontAsync("helv").then(() => {
        const treeViewObject = this.createTreeViewObject(app);
        canvas.scene.add(treeViewObject);
        this._initEvent(treeViewObject);
      });
    }
    protected onRenderFrame: (
      treevo: BinaryTreeViewObject,
      canvas: AppCanvas
    ) => void = () => {};
    componentDidMount() {
      if (this.props.app && this.props.app.canvas) {
        this._initTree(this.props.app, this.props.app.canvas);
      }
    }
    render() {
      return (
        <div>
          <div id="control-header" style={{ position: "fixed", width: "100%" }}>
            {this.getControlPanel(this.props.app)}
          </div>
          <div
            id="info-panel-bottom"
            style={{ position: "fixed", width: "100%", bottom: 0 }}
          >
            {this.getInfoPanel()}
          </div>
        </div>
      );
    }
  };
}

export function WithTreeContaier(TreePage: React.ComponentClass<any, any>) {
  return class extends React.Component<any, { app?: AppBase }> {
    constructor(props: any) {
      super(props);
      this.state = { app: undefined };
    }
    render() {
      const { app } = this.state;
      return (
        <AppLayout onSceneLoaded={(app: AppBase) => this.setState({ app })}>
          {app ? (
            <div>
              <TreePage app={app} />
            </div>
          ) : null}
        </AppLayout>
      );
    }
  };
}
