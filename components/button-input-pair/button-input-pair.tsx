import { Button, Input } from 'antd';
import * as React from 'react'
import './button-input-pair.less';

export interface ButtonInputPairProps{
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