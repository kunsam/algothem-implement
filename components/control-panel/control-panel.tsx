import * as React from "react";
import "./control-panel.less";
import { Button } from "antd";
import { AppBase } from "../../layouts/app/app";
import { AppCommandEventType } from "../../src/core/contants/events";
import { KeyboardEventContext } from "../../src/core/event/context/keyboard-event-context";
import Router from "next/router";

export function WithOperation(
  WrappedComponent: React.ComponentClass<any, any>
) {
  return class extends React.Component<
    { app: AppBase },
    { operating: boolean; toggleAnimate: boolean }
  > {
    private _operationDone: boolean;
    constructor(props: any) {
      super(props);
      this.state = {
        operating: false,
        toggleAnimate: true
      };
      this._operationDone = false;
    }
    componentDidMount() {
      if (this.props.app) {
        this.props.app.eventManager
          .commandEvents()
          .listenOperationDone(this.onOperationDone.bind(this));
        this.props.app.eventManager
          .keyboardEvents()
          .listenKeyDown((context: KeyboardEventContext) => {
            if (context.args && context.args.keyCode === 80) {
              this.onReplay();
            }
          });
      }
    }

    public onOperationDone() {
      this._operationDone = true;
      this.setState({ operating: false });
    }

    public onOperationConfirm() {
      this.setState({ operating: true }, () => {
        if (this._operationDone) {
          this._operationDone = false;
          this.setState({ operating: false });
        }
      });
    }

    public onReplay() {
      if (this.props.app) {
        this.props.app.eventManager
          .commandEvents()
          .emitEvent(AppCommandEventType.rePlay);
      }
    }
    public onHandleOpenAnimate() {
      if (this.props.app) {
        this.props.app.eventManager
          .commandEvents()
          .emitEvent(AppCommandEventType.toggleAnimate);
      }
      this.setState({ toggleAnimate: !this.state.toggleAnimate });
    }

    render() {
      const { toggleAnimate } = this.state;
      return (
        <div className="ControlPanel">
          <WrappedComponent
            {...this.props}
            operating={this.state.operating}
            onOperationConfirm={this.onOperationConfirm.bind(this)}
          />
          <div className="right-global-panel">
            <Button
              icon="play-circle"
              style={{ height: 20, lineHeight: `20px` }}
              onClick={this.onReplay.bind(this)}
            >
              回放[P]
            </Button>
            <Button
              style={{ marginLeft: 5, height: 20, lineHeight: `20px` }}
              icon={toggleAnimate ? "close" : "check"}
              onClick={this.onHandleOpenAnimate.bind(this)}
            >
              {toggleAnimate ? "关闭动画" : "打开动画"}
            </Button>
          </div>
          <div style={{ clear: "both" }} />
        </div>
      );
    }
  };
}
