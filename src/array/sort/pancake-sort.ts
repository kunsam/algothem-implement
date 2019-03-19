
/*
  wiki: Although seen more often as an educational device,
  pancake sorting also appears in applications in parallel processor networks,
  in which it can provide an effective routing algorithm between processors
*/

/**
 * @paradigm: [BruteForce]
 * @SortingInPlace: 
 */
export default class PancakeSort {

  public static flip(array: number[], start: number) {
    let idx = 0;
    for (let i = start; i < (start + array.length) / 2; i++) {
      [array[i], array[array.length - 1 - idx]] = [
        array[array.length - 1 - idx],
        array[i]
      ];
      idx++;
    }
  }

  /**
   * TimeComplexcity: О(n2) | О(n2) | O(n)
   *
   * @static
   * @param {number[]} arr
   * @memberof PancakeSort
   */
  public static sort(arr: number[]) {
    for (let i = 0; i < arr.length - 1; i++) {
      const currArr = arr.slice(i, arr.length);
      const currMax = currArr.reduce((prev, curr, idx) => (
        (curr > prev.val) ? { idx, val: curr } : prev),
        { idx: 0, val: currArr[0] }
      );
      if (currMax.idx !== 0) {
        // if currMax.idx === 0 that means max element already at the bottom, no flip required
        PancakeSort.flip(arr, currMax.idx + i);
        PancakeSort.flip(arr, i);
      }
    }
  }

  public static test() {
    const array = [10, 2, 4, 7, 1, 29, 15, 10, 5]
    PancakeSort.sort(array);
    console.log(array, 'arrayarray')
  }
  
  
}