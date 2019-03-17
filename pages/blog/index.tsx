



import React, { Component } from 'react'



// 作为一个中间跳转页了
export default class Index extends Component {


  // !或者加一些3D的场景点击跳转
  componentDidMount() {
    window.location.href = 'https://www.notion.so/PAY-ATTENTION-b917446dabf842a3aa51240e381739d4'
  }

  // 这里的样式仿照google cloud的样式就ok
  render() {
    return (
      <div>
        <div>数据结构与算法</div>
        <div>web系统设计与开发</div>
      </div>
    );
  }
}
