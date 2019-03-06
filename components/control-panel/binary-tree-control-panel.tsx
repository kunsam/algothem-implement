import * as React from 'react'
import "./style/binary-tree-control-panel.less"
import { WithOperation } from './control-panel';
import { AppBase } from '../../layouts/app/app';
import { ButtonInputPair } from '../button-input-pair/button-input-pair';
import { IBasicTreeEventType } from '../../pages/tree/basic-binary-tree-page';


class Component extends React.Component<
  {
    app: AppBase,
    operating: boolean,
    onOperationConfirm: Function,
  }
> {

  public onConfirmLeftRotate(key: string) {
    if (!key) return;
    this.props.app.eventManager.commandEvents().emitKeyEvent(IBasicTreeEventType.onLeftRotate, key);
    this.props.onOperationConfirm();
  }

  public onConfirmRightRotate(key: string) {
    if (!key) return;
    this.props.app.eventManager.commandEvents().emitKeyEvent(IBasicTreeEventType.onRightRotate, key);
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
      </div>
    )
  }

}

const BinartTreePageControlPanel  = WithOperation(Component);
export default BinartTreePageControlPanel;