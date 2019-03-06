
import * as React from 'react'
import { WithInfoPanel } from '../info-panel';

class BinaryTreeInfoPanelComp extends React.Component<any, any> {
  render() {
    return (
      <div>
        <a href="www.baidu.com">Basic Binary Tree</a>
      </div>
    )
  }
 }

const BinaryTreeInfoPanel = WithInfoPanel(BinaryTreeInfoPanelComp)

 export default BinaryTreeInfoPanel;