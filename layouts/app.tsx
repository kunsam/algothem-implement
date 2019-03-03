

// import '../static/antd.min.css';
import "./app.less"
import * as React from 'react'

export default class AppLayout extends React.Component {


  render() {

    return (
      <div id="AppLayout">
        {this.props.children}
      </div>
    )
  }
}