



import React, { Component } from 'react'
import Head from 'next/head'

export default class MobileAppLayout extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.state = {
      ready: false
    }
  }

  componentDidMount() {
    this.setState({ ready: true })
  }

  render() {
    const { ready } = this.state;

    return (
      <div className="AppLayout" style={!ready ? { maxHeight: '100vh', overflow: 'hidden' } : {}}>
        <Head>
          <script src={`/static/js/viewport.js`}></script>
        </Head>
        {this.props.children}
      </div>
    )
  }
}
