import * as React from 'react'
import { App } from '../../../layouts/app/app-interface';
import { IBinarySearchTreeEventType } from '../../../pages/tree/binary-search-tree-page';
import { ButtonInputPair } from '../../button-input-pair/button-input-pair';
import { WithOperation } from '../control-panel';


class Component extends React.Component<
  {
    app: App,
    operating: boolean,
    onOperationConfirm: Function,
  }
> {

  public onConfirmLeftRotate(key: string) {
    if (!key) return;
    this.props.app.eventManager.emit(IBinarySearchTreeEventType.onLeftRotate, parseInt(key));
    this.props.onOperationConfirm();
  }

  public onConfirmRightRotate(key: string) {
    if (!key) return;
    this.props.app.eventManager.emit(IBinarySearchTreeEventType.onRightRotate, parseInt(key));
    this.props.onOperationConfirm();
  }
  
  render() {
    const { operating } = this.props;
    return (
      <div className="binary-search-tree-control-panel">
        <ButtonInputPair
          label="左旋"
          type="number"
          disabled={operating}
          onConfirm={this.onConfirmLeftRotate.bind(this)}
          onInputChange={() => {}}
        />
        <ButtonInputPair
          label="右旋"
          type="number"
          disabled={operating}
          onConfirm={this.onConfirmRightRotate.bind(this)}
          onInputChange={() => {}}
        />
      </div>
    )
  }

}

const BinarySearchTreeControlPanel = WithOperation(Component);
export default BinarySearchTreeControlPanel;