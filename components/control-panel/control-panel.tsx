
import * as React from 'react'
import './control-panel.less';
import { App } from '../../layouts/app/app-interface';
import { AppEventType } from '../../src/core/event-manager';


export class ControlPanel extends React.Component<
  {
    app: App,
    buttonInputPairs: React.ReactElement[]
  },
  {
    operating: boolean
  }
> {

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
      this.props.app.eventManager.listen(AppEventType.operationDone, this.onOperationDone.bind(this));
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
    const { buttonInputPairs } = this.props;
    console.log(buttonInputPairs, this.state.operating, 'buttonInputPairs')
    return (
      <div className="ControlPanel">
        {
          buttonInputPairs.map((bp, index) => React.cloneElement(bp, {
            key: `buttonInputPair${index}`,
            operating: this.state.operating,
            onConfirm: (...args: any[]) => {
              bp.props.onConfirm(...args);
              this.onOperationConfirm();
            }
          }))
        }
        {this.props.children}
      </div>
    )
  }

}