import { BasicTreeNode } from './basic-node';


export type NRangeNode = RangeNode | null;

export class RangeNode extends BasicTreeNode {
  public min: number;
  public max: number;
  constructor(key: number, min: number = -Infinity, max: number = Infinity) {
    super(key);
    this.min = min;
    this.max = max;
  }
}