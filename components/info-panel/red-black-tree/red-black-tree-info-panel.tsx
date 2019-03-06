
import * as React from 'react'
import { WithInfoPanel } from '../info-panel';

class BComponent extends React.Component<any, any> {
  render() {
    return (
      <div>
        <a href="www.baidu.com">Red Black Tree</a>
      </div>
    )
  }
 }

const RedBlackTreeInfoPanel = WithInfoPanel(BComponent)

 export default RedBlackTreeInfoPanel;