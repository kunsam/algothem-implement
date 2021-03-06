import { Button, Input } from "antd";
import * as React from "react";
import "./button-input-pair.less";

export interface ButtonInputPairProps {
  type?: string;
  label: string;
  className?: string;
  disabled?: boolean;
  onConfirm: (value: string) => void;
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class ButtonInputPair extends React.Component<
  ButtonInputPairProps,
  any
> {
  constructor(props: ButtonInputPairProps) {
    super(props);
    this.state = {
      value: ""
    };
  }

  public onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ value: e.target.value });
    this.props.onInputChange(e);
  }

  public onClick() {
    if (this.state.value) {
      this.props.onConfirm(this.state.value);
      this.setState({ value: "" });
    }
  }

  render() {
    const { className } = this.props;
    return (
      <div className={`ButtonInputPair ${className || ""}`}>
        <Input
          style={{ width: 100, height: 20 }}
          type={this.props.type}
          value={this.state.value}
          disabled={
            this.props.disabled === undefined ? false : this.props.disabled
          }
          onKeyDown={e => {
            if (e.keyCode === 13) this.onClick();
          }}
          onChange={this.onInputChange.bind(this)}
        />
        <Button
          style={{ height: 20 }}
          onClick={this.onClick.bind(this)}
        >
          {this.props.label}
        </Button>
      </div>
    );
  }
}
