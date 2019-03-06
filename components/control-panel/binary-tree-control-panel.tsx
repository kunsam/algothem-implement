import * as React from 'react'
import { WithOperation } from './control-panel';
import { App } from '../../layouts/app/app-interface';
import { ButtonInputPair } from '../button-input-pair/button-input-pair';
import { IBasicTreeEventType } from '../../pages/tree/basic-binary-tree-page';


class Component extends React.Component<
  {
    app: App,
    operating: boolean,
    onOperationConfirm: Function,
  }
> {

  // public onConfirmInsert(key: number) {
  //   this.props.app.eventManager.emit(IBasicTreeEventType.onInsert, key);
  //   this.props.onOperationConfirm();
  // }

  // public onConfirmDelete(key: number) {
  //   this.props.app.eventManager.emit(IBasicTreeEventType.onDelete, key);
  //   this.props.onOperationConfirm();
  // }

  public onConfirmLeftRotate(key: number) {
    this.props.app.eventManager.emit(IBasicTreeEventType.onLeftRotate, key);
    this.props.onOperationConfirm();
  }

  public onConfirmRightRotate(key: number) {
    this.props.app.eventManager.emit(IBasicTreeEventType.onRightRotate, key);
    this.props.onOperationConfirm();
  }
  
  render() {
    const { operating } = this.props;
    return (
      <div>
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