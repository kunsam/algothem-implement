
import * as React from 'react'
import './control-panel.less';
import { Button, Input } from 'antd';
import { App } from '../pages/tree/red-black-tree';

interface ButtonInputPairProps{
  type?: string;
  label: string;
  disabled?: boolean;
  onConfirm: (key: number) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class ButtonInputPair extends React.Component<ButtonInputPairProps, any> {
  constructor(props: ButtonInputPairProps) {
    super(props);
    this.state = {
      value: '',
    }
  }

  public onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
    this.props.onInputChange(e);
  }

  public onClick() {
    if (this.state.value) {
      this.props.onConfirm(parseInt(this.state.value));
      this.setState({ value: '' });
    }
  }

  render() {
    return (
      <div className="ButtonInputPair">
        <Input
          type={this.props.type}
          value={this.state.value}
          disabled={this.props.disabled === undefined ? false : this.props.disabled}
          onKeyDown={e => {
            if (e.keyCode === 13) this.onClick()
          }}
          onChange={this.onInputChange.bind(this)}
        />
        <Button onClick={this.onClick.bind(this)} >{this.props.label}</Button>
      </div>
    )
  }
}

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
      this.props.app.eventManager.listenOperationDone(this.onOperationDone.bind(this));
    }
  }

  public onInsert(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      return;
    }
  
  }

  public onConfirmFind(key: number) {
    this.props.app.eventManager.emitFindKey(key);
    this._change2Operating();
  }

  public onConfirmInsert(key: number) {
    this.props.app.eventManager.emitInsertKey(key);
    this._change2Operating();
  }

  public onConfirmDelete(key: number) {
    this.props.app.eventManager.emitDeleteKey(key);
    this._change2Operating();
  }

  public onConfirmLeftRotate(key: number) {
    this.props.app.eventManager.emitLeftRotate(key);
    this._change2Operating();
  }

  public onConfirmRightRotate(key: number) {
    this.props.app.eventManager.emitRightRotate(key);
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
        {/* <ButtonInputPair
          label="左旋"
          disabled={this.state.operating}
          onConfirm={this.onConfirmLeftRotate.bind(this)}
          onInputChange={() => {}}
        />
        <ButtonInputPair
          label="右旋"
          disabled={this.state.operating}
          onConfirm={this.onConfirmRightRotate.bind(this)}
          onInputChange={() => {}}
        /> */}

      </div>
    )
  }

}