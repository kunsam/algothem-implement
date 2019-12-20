import * as React from "react";
import App from "next/app";
import "antd/dist/antd.min.css";

// https://github.com/zeit/next-plugins/issues/282
export default class MyApp extends App<any, any> {
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
