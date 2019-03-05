
import * as React from 'react'
import { App } from '../../layouts/app/app-interface';
import { ControlPanel } from '../control-panel/control-panel';
import { ButtonInputPair } from '../button-input-pair/button-input-pair';
import { IRedBlackTreeEventType } from '../../pages/tree/red-black-tree-page';


export class RBPControlPanel extends React.Component<{ app: App }> {


  public onInsert(e: React.ChangeEvent<HTMLInputElement>) {
    if (!e.target.value) {
      return;
    }
  }

  public onConfirmFind(key: number) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onFind, key);
  }

  public onConfirmInsert(key: number) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onInsert, key);
    // this._change2Operating();
  }

  public onConfirmDelete(key: number) {
    this.props.app.eventManager.emit(IRedBlackTreeEventType.onDelete, key);
    // this._change2Operating();
  }
  
  // private _change2Operating() {
  //   this.setState({ operating: true }, () => {
  //     if (this._operationDone) {
  //       this._operationDone = false;
  //       this.setState({ operating: false })
  //     }
  //   });
  // }

  render() {
    return (
      <div className="ControlPanel">
        <ControlPanel
          app={this.props.app}
          buttonInputPairs={[
            <ButtonInputPair
              label="插入"
              type="number"
              onConfirm={this.onConfirmInsert.bind(this)}
              onInputChange={this.onInsert.bind(this)}
            />,
            // <ButtonInputPair
            //   label="删除"
            //   type="number"
            //   onConfirm={this.onConfirmDelete.bind(this)}
            //   onInputChange={() => {}}
            // />,
            // <ButtonInputPair
            //   label="查找"
            //   type="number"
            //   onConfirm={this.onConfirmFind.bind(this)}
            //   onInputChange={() => {}}
            // />
          ]}
        />

      </div>
    )
  }

}