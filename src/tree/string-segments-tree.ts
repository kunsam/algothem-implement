


function getMid(s: number, e: number) {
  return s + Math.floor((e - s) / 2);
}


export class BracketNode {
  public pairs: number; 
  public open: number; // unused 
  public closed: number; // unused 

  constructor() {
    this.pairs = this.open = this.closed = 0;
  }

}

export type NBracketNode = BracketNode | null;

export class StringSegmentsTree {

  public string: string;
  public tree: BracketNode[];

  constructor(string: string) {
    this.string = string;
    this.tree = [];
    this.constructSTUtil(string, 0, string.length - 1, 0);
  }

  public constructSTUtil(string: string, start: number, end: number,  current: number) {
    const tree = this.tree;
    // If there is one element in string, store it in 
    // current node of segment tree and return 
    if (start === end) { 
      // since it contains one element, pairs  
      // will be zero
      tree[current] = new BracketNode();
      tree[current].pairs = 0; 
      // check whether that one element is opening  
      // bracket or not 
      tree[current].open = (string[start] == '(' ? 1 : 0); 
      // check whether that one element is closing 
      // bracket or not 
      tree[current].closed = (string[start] == ')' ? 1 : 0); 
      return; 
    } 
    const mid = getMid(start, end); 
    this.constructSTUtil(string, start, mid, current * 2 + 1); 
    this.constructSTUtil(string, mid + 1, end, current * 2 + 2); 
    // Merge left and right child into the Parent Node 
    tree[current] = this.merge(tree[current * 2 + 1], tree[current * 2 + 2]); 
  }

  public merge(leftChild: NBracketNode, rightChild: NBracketNode) {
    const parentNode = new BracketNode(); 
    leftChild = leftChild || new BracketNode();
    rightChild = rightChild || new BracketNode();
    const minMatched = Math.min(leftChild.open, rightChild.closed); 
    parentNode.pairs = leftChild.pairs + rightChild.pairs + minMatched; 
    parentNode.open = leftChild.open + rightChild.open - minMatched; 
    parentNode.closed = leftChild.closed + rightChild.closed - minMatched;
    return parentNode;
  }

  public query(start: number, end: number) {
    const result = this.queryUtil(0, this.string.length - 1, start, end, 0);
    // since we are storing numbers pairs 
    // and have to return maximum length, hence 
    // multiply no of pairs by 2
    return result ? result.pairs * 2 : 0;
  }

  public queryUtil(start: number, end: number, qstart: number, qend: number, current: number) {
   // No overlap 
   if (start > qend || end < qstart) { 
      // returns a Node for out of bounds condition 
      return null; 
    } 

    // Complete overlap 
    if (start >= qstart && end <= qend) { 
        return this.tree[current]; 
    } 

    // Partial Overlap Merge results of Left 
    // and Right subtrees 
    const mid = getMid(start, end); 
    const left = this.queryUtil(start, mid, qstart, qend, current * 2 + 1); 
    const right = this.queryUtil(mid + 1, end, qstart, qend, current * 2 + 2); 
    // merge left and right subtree query results 
    const res = this.merge(left, right); 
    return res;
  }

  public static test() {
    const string = '())(())(())(';
    const smt = new StringSegmentsTree(string);
    const result1 = smt.query(0, 11);
    const result2 = smt.query(1, 2);
    console.log(result1, result2, 'Maximum Length Correct Bracket Subsequence between ')
  }
}