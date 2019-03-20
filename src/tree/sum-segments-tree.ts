

function getMid(s: number, e: number) {
  return s + Math.floor((e - s) / 2);
}


export class SegmentsTree {

  public array: number[];
  public treeArray: number[];

  constructor(arr: number[]) {
    const height = Math.ceil(Math.log2(arr.length));
    const maxSize = Math.ceil(2 * Math.pow(2, height) - 1);
    this.treeArray = new Array(maxSize).fill(0); // length: maxSize
    this.array = arr;
    SegmentsTree.constructSTUtil(arr, 0, arr.length - 1, this.treeArray, 0);
  }

  public getSum(qstart: number, qend: number) {
    if (qstart < 0 || qend > this.treeArray.length - 1 || qstart > qend) { 
      return -1; 
    } 
    return SegmentsTree.getSumUtil(this.treeArray, 0, this.array.length - 1, qstart, qend, 0);
  }

  public update(index: number, value: number) {
    const arr = this.array;
    if (index < 0 || index > arr.length -1) {
      return;
    }
    // Get the difference between new value and old value 
    let diff = value - arr[index]; 
    // Update the value in array 
    arr[index] = value;
    // Update the values of nodes in segment tree 
    SegmentsTree.updateValueUtil(this.treeArray, 0, this.array.length - 1, index, diff, 0);
  }

  public static updateValueUtil(tree: number[], start: number, end: number, index: number, diff: number, current: number) {
    if (index < start || index > end) return; 
    // If the input index is in range of this node, then update  
    // the value of the node and its children 
    tree[current] = tree[current] + diff; 
    if (end !== start) { 
      const mid = getMid(start, end); 
      SegmentsTree.updateValueUtil(tree, start, mid, index, diff, 2 * current + 1); 
      SegmentsTree.updateValueUtil(tree, mid+1, end, index, diff, 2 * current + 2); 
    }
  }

  public static constructSTUtil(arr: number[], start: number, end: number, tree: number[], current: number) {
    // If there is one element in array, store it in current node of 
    // segment tree and return 
    if (start === end) { 
      tree[current] = arr[start]; 
      return arr[start]; 
    }
    // If there are more than one elements, then recur for left and 
    // right subtrees and store the sum of values in this node 
    const mid = getMid(start, end);
    tree[current] = SegmentsTree.constructSTUtil(arr, start, mid, tree, current*2+1) + 
      SegmentsTree.constructSTUtil(arr, mid+1, end, tree, current*2+2);
      
    return tree[current];
  }

  public static getSumUtil(tree: number[], start: number, end: number, qstart: number, qend: number, current: number): number {
    // If segment of this node is a part of given range, then return 
    // the sum of the segment 
    if (qstart <= start && qend >= end) return tree[current]; 
    // If segment of this node is outside the given range 
    if (end < qstart || start > qend) return 0; 
  
    // If a part of this segment overlaps with the given range 
    // const mid = getMid(start, end);
    const mid = Math.floor((start + end )/ 2)
    return SegmentsTree.getSumUtil(tree, start, mid, qstart, qend, 2*current+1) + 
      SegmentsTree.getSumUtil(tree, mid + 1, end, qstart, qend, 2*current+2);
  }

  public static test() {
    const arr = [1, 3, 5, 7, 9, 11];
    const segtree = new SegmentsTree(arr);

    console.log(segtree.treeArray, 'segtreesegtree')

    console.log('sum:', segtree.getSum(1, 3));

    segtree.update(1, 10);

    console.log('sum after update:', segtree.getSum(1, 3));
  }

}