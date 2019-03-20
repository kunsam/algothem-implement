

// index >> 5 corresponds to dividing index by 32 
// index & 31 corresponds to modulo operation of  
// index by 32 
  

export class ArrayElementFlagWithBit {

  private _origin : any[];
  private _checkBitArray: any[];
  constructor(arr: any[], func: (...args: any[]) => boolean) {
    this._origin = arr;
    this._checkBitArray = [];
    this._set(func);
    this.checkAll();
  }

  // Function to check value of bit position whether  
  // it is zero or one 
  public checkbit(index: number) { 
    return this._checkBitArray[index >> 5] & (1 << (index & 31)); 
  } 

  // Sets value of bit for corresponding index 
  public setbit(index: number) { 
    this._checkBitArray[index >> 5] |= (1 << (index & 31)); 
  } 

  private _set(func: (...args: any[]) => boolean) {
    // Iterate through every index from a to b and 
    // call setbit() if it is a multiple of 2 or 5 
    for (let i = 0; i <= this._origin.length - 1; i++) {
      if (func(this._origin[i])) {
        this.setbit(i); 
      }
    }
  }

  public checkAll() {
    for (let i = 0; i <= this._origin.length - 1; i++) {
      if (this.checkbit(i)) {
        console.log(this._origin[i], 'check i')
      }
    }
  }

  public check(i: number) {
    return this.checkbit(i);
  }

  public static test() {
    const array = new Array(9).fill(0).map((_,i) => i + 2);
    const flags = new ArrayElementFlagWithBit(array, (d => {
      return d % 2 == 0 || d % 5 == 0;
    }));
    console.log(flags, 'flags')
  }
}


