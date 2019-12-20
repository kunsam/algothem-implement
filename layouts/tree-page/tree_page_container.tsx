import React, { Component, ComponentClass } from 'react'
import AppLayout, { AppBase } from "../app/app";

export function WithTreeContaier(TreePage: ComponentClass<any, any>) {
  return class extends Component<any, { app?: AppBase }> {
    constructor(props: any) {
      super(props);
      this.state = { app: undefined };
    }
    render() {
      const { app } = this.state;
      return (
        <AppLayout onSceneLoaded={(app: AppBase) => this.setState({ app })}>
          {app ? (
            <div>
              <TreePage app={app} />
            </div>
          ) : null}
        </AppLayout>
      );
    }
  };
}
