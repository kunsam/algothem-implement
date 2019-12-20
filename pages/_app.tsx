import * as React from "react";
import App from "next/app";
import "antd/dist/antd.min.css";

export default class MyApp extends App<any, any> {
  static async getInitialProps(appContext: any) {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <div className="app-main" style={{ padding: 10 }}>
          <Component {...pageProps} />
        </div>
      </>
    );
  }
}
