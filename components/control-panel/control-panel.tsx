
import * as React from 'react'
import './control-panel.less';
import { Button } from 'antd';
import { AppBase } from '../../layouts/app/app';


export function WithOperation(WrappedComponent: React.ComponentClass<any, any>) {

  return class extends React.Component<{ app: AppBase }, { operating: boolean }> {
    private _operationDone: boolean;
    constructor(props: any) {
      super(props);
      this.state = {
        operating: false,
      };
      this._operationDone = false;
    }
    componentDidMount() {
      if (this.props.app) {
        this.props.app.eventManager.commandEvents().listenOperationDone(this.onOperationDone.bind(this));
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
          this.setState({ operating: false })
        }
      });
    }


    render() {
      return (
        <div className="ControlPanel">
          <WrappedComponent
            {...this.props}
            operating={this.state.operating}
            onOperationConfirm={this.onOperationConfirm.bind(this)}
          />
          <div className="right-global-panel">
            <Button type="primary" icon="play-circle">回放[shortcut: P]</Button>
          </div>
          <div style={{ clear: 'both' }}/>
        </div>
      )
    }

  }
}
