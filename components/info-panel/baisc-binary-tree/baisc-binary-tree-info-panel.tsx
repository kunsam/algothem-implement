
import * as React from 'react'
import { WithInfoPanel } from '../info-panel';
import Link from 'next/link'

class BinaryTreeInfoPanelComp extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Link href="/">回到首页</Link>
      </div>
    )
  }
 }

const BinaryTreeInfoPanel = WithInfoPanel(BinaryTreeInfoPanelComp)

 export default BinaryTreeInfoPanel;