
import * as React from 'react'
import { WithInfoPanel } from '../info-panel';
import Link from 'next/link'

class BComponent extends React.Component<any, any> {
  render() {
    return (
      <div>
        <Link href="/">回到首页</Link>
      </div>
    )
  }
 }

const RedBlackTreeInfoPanel = WithInfoPanel(BComponent)

 export default RedBlackTreeInfoPanel;