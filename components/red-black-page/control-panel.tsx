
import * as React from 'react'
import './control-panel.less';
import { App } from '../../layouts/app/app-interface';
import { ButtonInputPair } from '../button-input-pair/button-input-pair';
import { IRedBlackTreeEventType } from '../../pages/tree/red-black-tree';
import { AppEventType } from '../../src/core/event-manager';


export class ControlPanel extends React.Component<{ app: App }, {
  operating: boolean,
}> {

  private _operationDone: boolean;

  constructor(props: any) {
    super(props);
    this.state = {
      operating: false,
    };
    this._operationDone = false;
  }

  public onOperationDone() {
    this._operationDone = true;
    this.setState({ operating: false });
  }

  componentDidMount() {
    if (this.props.app) {
      this.props.app.eventManager.listen(AppEventType.operationDone, this.onOperationDone.bind(this));
    }
  }

  public onInsert(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      return;
    }

  }

  public onConfirmFind(key: number) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onFind, key);
    this._change2Operating();
  }

  public onConfirmInsert(key: number) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onInsert, key);
    this._change2Operating();
  }

  public onConfirmDelete(key: number) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onDelete, key);
    this._change2Operating();
  }
  
  private _change2Operating() {
    this.setState({ operating: true }, () => {
      if (this._operationDone) {
        this._operationDone = false;
        this.setState({ operating: false })
      }
    });
  }

  render() {
    return (
      <div className="ControlPanel">
        <ButtonInputPair
          label="插入"
          type="number"
          disabled={this.state.operating}
          onConfirm={this.onConfirmInsert.bind(this)}
          onInputChange={this.onInsert.bind(this)}
        />
        <ButtonInputPair
          label="删除"
          type="number"
          disabled={this.state.operating}
          onConfirm={this.onConfirmDelete.bind(this)}
          onInputChange={() => {}}
        />
        <ButtonInputPair
          label="查找"
          type="number"
          disabled={this.state.operating}
          onConfirm={this.onConfirmFind.bind(this)}
          onInputChange={() => {}}
        />
      </div>
    )
  }

}