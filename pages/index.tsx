import React, { Component } from "react";
import { Button } from "antd";
import Router from "next/router";

// 作为一个中间跳转页了
export default class Index extends Component {
  // 这里的样式仿照google cloud的样式就ok
  render() {
    return (
      <div>
        <h2>欢迎光临，正在开发中</h2>
        <div>
          <Button
            onClick={() => {
              Router.push({
                pathname: "/tree/basic-binary-tree-page"
              });
            }}
          >
            二叉树算法演示
          </Button>
        </div>
        <div>
          <Button
            onClick={() => {
              Router.push({
                pathname: "/tree/red-black-tree-page"
              });
            }}
          >
            红黑树算法演示
          </Button>
        </div>
      </div>
    );
  }
}
