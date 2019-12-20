
import * as React from 'react'
import { WithInfoPanel } from '../info-panel';

class BinaryTreeInfoPanelComp extends React.Component<any, any> {
  render() {
    return (
      <div>
        <a href="/">回到首页</a>
      </div>
    )
  }
 }

const BinaryTreeInfoPanel = WithInfoPanel(BinaryTreeInfoPanelComp)

 export default BinaryTreeInfoPanel;