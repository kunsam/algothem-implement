


export default class MaxMiumSubarray {

  public static get(array: number[]) {
    let maxSoFar = 0;
    let maxEndingHere = 0;
    let lastIndex: number = 0;
    let index: number = 0;
    for (let i = 0; i < array.length; i++) {
      maxEndingHere += array[i];
      if (maxEndingHere < 0) {
        maxEndingHere = 0;
      }
      if (maxSoFar < maxEndingHere) {
        maxSoFar = maxEndingHere;
        lastIndex = index;
        index = i;
      }
    }
    let subarray: number[] = [];
    if (index - lastIndex > 0) {
      array.forEach((d, i) => {
        if (i >= lastIndex && i <= index) {
          subarray.push(d);
        }
      })
    }
    return subarray;
  }

  public static test() {
    const D = [-2, -3, 4, -1, -2, 1, 5, -3];
    const subarray = MaxMiumSubarray.get(D);
    console.log(subarray, 'subarray')
  }

  public static wiki() {
    return 'https://en.wikipedia.org/wiki/Maximum_subarray_problem'
  }
}