

import './info-panel.less';
import * as React from 'react'


export function WithInfoPanel(WrappedComponent: React.ComponentClass<any, any>) {

  return class extends React.Component<any, any> {
    constructor(props: any) {
      super(props);
      // this.state = {};
    }
    componentDidMount() {
      // if (this.props.app) {
      //   this.props.app.eventManager.listen(AppEventType.operationDone, this.onOperationDone.bind(this));
      // }
    }

    render() {
      return (
        <div className="InfoPanel">
          <WrappedComponent
            {...this.props}
          />
        </div>
      )
    }

  }
}
