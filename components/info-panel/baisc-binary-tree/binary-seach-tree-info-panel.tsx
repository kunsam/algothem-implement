
import * as React from 'react'
import { WithInfoPanel } from '../info-panel';

class BComponent extends React.Component<any, any> {
  render() {
    return (
      <div>
        <a href="www.baidu.com">Binary Seach Tree</a>
      </div>
    )
  }
 }

const BinarySearchTreeInfoPanel = WithInfoPanel(BComponent)

 export default BinarySearchTreeInfoPanel;