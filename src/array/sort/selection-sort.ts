
/**
 *
 * @paradigm: [BruteForce]
 * @Stable: No(default) [ArraySortStability]
 * @SortingInPlace: Yes, it does not require extra space
 */
export default class SelectionSort{
  /**
   * TimeComplexcity: О(n2) comparisons, О(n) swaps | О(n2) comparisons, О(n) swaps | О(n2) comparisons, О(n) swaps
   *
   * @static
   * @param {number[]} arr
   * @param {boolean} [needStatble]
   * @memberof SelectionSort
   */
  public static sort(arr: number[], needStatble?: boolean) {
    let minIndex: number;
    for (let i: number = 0; i < arr.length - 1; i++) {
      minIndex = i;
      for(let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (!needStatble) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
      } else {
        // 不选择交换，而是在 i 处 插入最小值并且全部向前移一位
        const key = arr[minIndex];
        while (minIndex > i) { 
          arr[minIndex] = arr[minIndex - 1]; 
          minIndex--; 
        } 
        arr[i] = key;
      }
    }
  }
}