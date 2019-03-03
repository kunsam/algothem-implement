
import * as React from 'react'
import './control-panel.less';
import { Button, Input } from 'antd';
import { App } from '../pages/tree/red-black-tree';

interface ButtonInputPairProps{
  type?: string;
  label: string;
  app?: App;
  onConfirm: (key: number) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class ButtonInputPair extends React.Component<ButtonInputPairProps, any> {
  constructor(props: ButtonInputPairProps) {
    super(props);
    this.state = {
      value: '',
      operating: false,
    }
    if (this.props.app) {
      this.props.app.eventManager.listenOperationDone(() => {
        this.setState({
          value: '',
          operating: false,
        });
      });
    }
  }

  public onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
    this.props.onInputChange(e);
  }

  public onClick() {
    if (this.state.value) {
      this.props.onConfirm(parseInt(this.state.value));
      this.setState({ operating: true });
    }
  }

  render() {
    // const 
    return (
      <div className="ButtonInputPair">
        <Input
          disabled={this.state.operating}
          type={this.props.type}
          value={this.state.value}
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

export class ControlPanel extends React.Component<{ app: App }> {

  constructor(props: any) {
    super(props);
    this.state = {
      insertKey: ''
    };
  }

  public onInsert(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      return;
    }
  
  }

  public onConfirmInsert(key: number) {
    this.props.app.eventManager.emitInsertKey(key);
  }

  render() {

    return (
      <div className="ControlPanel">
        <ButtonInputPair
          label="插入"
          type="number"
          app={this.props.app}
          onConfirm={this.onConfirmInsert.bind(this)}
          onInputChange={this.onInsert.bind(this)}
        />
        <ButtonInputPair
          label="删除"
          type="number"
          app={this.props.app}
          onConfirm={this.onConfirmInsert}
          onInputChange={this.onInsert}
        />
        <ButtonInputPair
          label="查找"
          type="number"
          app={this.props.app}
          onConfirm={this.onConfirmInsert}
          onInputChange={this.onInsert}
        />
        <ButtonInputPair
          label="左旋"
          app={this.props.app}
          onConfirm={this.onConfirmInsert}
          onInputChange={this.onInsert}
        />
        <ButtonInputPair
          label="右旋"
          app={this.props.app}
          onConfirm={this.onConfirmInsert}
          onInputChange={this.onInsert}
        />

      </div>
    )
  }

}