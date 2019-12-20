import "./style/binary-tree-control-panel.less";

import * as React from "react";
import { TreeSelect } from "antd";
import { WithOperation } from "./control-panel";
import { AppBase } from "../../layouts/app/app";
import { BasicBinaryTree } from "../../src/tree/basic-binary-tree";
import GetMockBinaryTree from "../../src/tree/mock/binary-tree-mock";
import { ButtonInputPair } from "../button-input-pair/button-input-pair";
import { IBasicTreeEventType } from "../../pages/tree/basic-binary-tree-page";
import { AppCommandEventType } from "../../src/core/contants/events";

const MOCK_MAP: Map<string, BasicBinaryTree[]> = new Map();
MOCK_MAP.set("leftRotate", GetMockBinaryTree.getLeftRotateMock());
MOCK_MAP.set("rightRotate", GetMockBinaryTree.getRightRotateMock());

class Component extends React.Component<{
  app: AppBase;
  operating: boolean;
  onOperationConfirm: Function;
}> {
  private _currentSelectTree?: string;

  public getTreeSelections() {
    let tree: React.ReactNode[] = [];
    MOCK_MAP.forEach((data, key) => {
      tree.push(
        <TreeSelect.TreeNode key={`tree${key}`} value={key} title={key}>
          {data.map((_, index) => (
            <TreeSelect.TreeNode
              key={`tree${key}${index}`}
              value={`tree-${key}-${index}`}
              title={`tree-${key}-${index}`}
            >
              树{index}
            </TreeSelect.TreeNode>
          ))}
        </TreeSelect.TreeNode>
      );
    });
    return tree;
  }

  public getTreeSelect() {
    // GetMockBinaryTree
    return (
      <TreeSelect
        size="small"
        placeholder="choose a tree"
        style={{ width: 200, marginLeft: 10 }}
        onSelect={this.onSelectTree.bind(this)}
      >
        {this.getTreeSelections()}
      </TreeSelect>
    );
  }

  public onSelectTree(value: string) {
    if (!value) return;
    if (this._currentSelectTree === value) return;

    const values = value.split("-");
    if (values.length < 3) {
      return;
    }
    const type = values[1];
    const index = parseInt(values[2]);
    if (type === undefined || index === NaN) {
      return;
    }
    const treeArray = MOCK_MAP.get(type);
    if (treeArray && treeArray[index]) {
      this._currentSelectTree = value;
      this.props.app.eventManager
        .commandEvents()
        .emitEvent(AppCommandEventType.onSelectTree, treeArray[index]);
    }
  }

  public onConfirmLeftRotate(key: string) {
    if (!key) return;
    this.props.app.eventManager
      .commandEvents()
      .emitKeyEvent(IBasicTreeEventType.onLeftRotate, key);
    this.props.onOperationConfirm();
  }

  public onConfirmRightRotate(key: string) {
    if (!key) return;
    this.props.app.eventManager
      .commandEvents()
      .emitKeyEvent(IBasicTreeEventType.onRightRotate, key);
    this.props.onOperationConfirm();
  }

  render() {
    const { operating } = this.props;
    return (
      <div className="binary-tree-control-panel">
        <ButtonInputPair
          label="左旋"
          type="number"
          disabled={operating}
          onConfirm={this.onConfirmLeftRotate.bind(this)}
          onInputChange={() => {}}
        />
        <ButtonInputPair
          label="右旋"
          type="number"
          disabled={operating}
          onConfirm={this.onConfirmRightRotate.bind(this)}
          onInputChange={() => {}}
        />
        {this.getTreeSelect()}
      </div>
    );
  }
}

const BinartTreePageControlPanel = WithOperation(Component);
export default BinartTreePageControlPanel;
