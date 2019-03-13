



/*
 suitable for sorting lists of elements where the number of elements and the number of possible key values are approximately the same.
 similar to counting sort, but differs in that it “moves items twice:
 once to the bucket array and again to the final destination
*/

export default class PigeonholeSort {

  /**
   *
   * O(n + Range) time
   * @static
   * @param {number[]} arr
   * @memberof PigeonholeSort
   */
  public static sort(arr: number[]) {
    let min = arr[0];
    let max = arr[0];
    const N = arr.length;
    for (let i = 1; i < N; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    const range = max - min + 1;
    // ATTENTION: if use .fill([]) one index push will lead to all index has the pushed item i.e. the arrays are the same
    const holes: number[][] = new Array(range).fill(null).map(_ => []);
    for (let i = 0; i < N; i++) {
      const index = arr[i] - min;
      holes[index].push(arr[i]);
    }
    let k = 0;
    for (let i = 0; i < range; i++) {
      for (let j = 0; j < holes[i].length; j++) {
        arr[k++] = holes[i][j];
      }
    }
  }
}