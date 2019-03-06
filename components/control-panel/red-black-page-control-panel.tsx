import * as React from 'react'
import { WithOperation } from './control-panel';
import { AppBase } from '../../layouts/app/app';
import { ButtonInputPair } from '../button-input-pair/button-input-pair';
import { IRedBlackTreeEventType } from '../../pages/tree/red-black-tree-page';

class Component extends React.Component<
  {
    app: AppBase,
    operating: boolean,
    onOperationConfirm: Function,
  }
> {

  public onConfirmFind(key: string) {
    if (!key) return;
    this.props.app.eventManager.commandEvents().emitKeyEvent(IRedBlackTreeEventType.onFind, key);
    this.props.onOperationConfirm();
  }

  public onConfirmInsert(key: string) {
    if (!key) return;
    this.props.app.eventManager.commandEvents().emitKeyEvent(IRedBlackTreeEventType.onInsert, key);
    this.props.onOperationConfirm();
  }

  public onConfirmDelete(key: string) {
    if (!key) return;
    this.props.app.eventManager.commandEvents().emitKeyEvent(IRedBlackTreeEventType.onDelete, key);
    this.props.onOperationConfirm();
  }
  
  render() {
    const { operating } = this.props;
    return (
      <div className="red-black-page-control-panel">
        <ButtonInputPair
          label="插入"
          type="number"
          disabled={operating}
          onConfirm={this.onConfirmInsert.bind(this)}
          onInputChange={() => {}}
        />
        <ButtonInputPair
          label="删除"
          type="number"
          disabled={operating}
          onConfirm={this.onConfirmDelete.bind(this)}
          onInputChange={() => {}}
        />
        <ButtonInputPair
          label="查找"
          type="number"
          disabled={operating}
          onConfirm={this.onConfirmFind.bind(this)}
          onInputChange={() => {}}
        />
      </div>
    )
  }

}

const RBPControlPanel  = WithOperation(Component);
export default RBPControlPanel;