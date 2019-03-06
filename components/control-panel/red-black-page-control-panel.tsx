import * as React from 'react'
import { WithOperation } from './control-panel';
import { App } from '../../layouts/app/app-interface';
import { ButtonInputPair } from '../button-input-pair/button-input-pair';
import { IRedBlackTreeEventType } from '../../pages/tree/red-black-tree-page';

class Component extends React.Component<
  {
    app: App,
    operating: boolean,
    onOperationConfirm: Function,
  }
> {


  public onInsert(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      return;
    }
  }

  public onConfirmFind(key: string) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onFind, parseInt(key));
    this.props.onOperationConfirm();
  }

  public onConfirmInsert(key: string) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onInsert, parseInt(key));
    this.props.onOperationConfirm();
  }

  public onConfirmDelete(key: string) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onDelete, parseInt(key));
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
          onInputChange={this.onInsert.bind(this)}
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