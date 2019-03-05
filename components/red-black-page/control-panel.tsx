
import * as React from 'react'
import { App } from '../../layouts/app/app-interface';
import { WithOperation } from '../control-panel/control-panel';
import { ButtonInputPair } from '../button-input-pair/button-input-pair';
import { IRedBlackTreeEventType } from '../../pages/tree/red-black-tree-page';


class RBPControlPanel extends React.Component<
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

  public onConfirmFind(key: number) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onFind, key);
    this.props.onOperationConfirm();
  }

  public onConfirmInsert(key: number) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onInsert, key);
    this.props.onOperationConfirm();
  }

  public onConfirmDelete(key: number) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onDelete, key);
    this.props.onOperationConfirm();
  }
  
  render() {
    const { operating } = this.props;
    return (
      <div>
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

export default WithOperation(RBPControlPanel);