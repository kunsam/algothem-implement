import React, { Component } from "react";
import { Button } from "antd";
import Router, { withRouter } from "next/router";
import Link from "next/link";

// 作为一个中间跳转页了

export class Index extends Component<any, any> {
  // 这里的样式仿照google cloud的样式就ok
  render() {
    return (
      <div>
        <h2>欢迎光临，正在开发中</h2>
        <div>
          <Button
            onClick={() => {
              this.props.router.push({
                pathname: "/tree/basic-binary-tree-page"
              });
            }}
          >
            二叉树算法演示
          </Button>
        </div>
        <div>
          <Link href="/tree/red-black-tree-page">123</Link>
          <Link href="/tree/red-black-tree-page">
            <Button
              onClick={() => {
                console.log("RouterRouter");
                Router.push({
                  pathname: "/tree/red-black-tree-page"
                });
              }}
            >
              红黑树算法演示
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(Index)