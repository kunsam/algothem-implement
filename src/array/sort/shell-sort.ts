


/*
  The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared
  since it can be (implemented using little code and does not use the call stack)
  targeted at embedded systems use it instead of quicksort.
  sort short subarrays and to prevent a slowdown when the recursion depth exceeds a given limit. 
*/

/*
希尔排序，也称递减增量排序算法，是插入排序的一种更高效的改进版本
  插入排序在对几乎已经排好序的数据操作时，效率高，即可以达到线性排序的效率
  但插入排序一般来说是低效的，因为插入排序每次只能将数据移动一位
*/

/**
 *
 *
 *  @paradigm: [BruteForce]
 *  @SortingInPlace: Yes
 */
export default class ShellSort{

  /**
   *
   * TimeComplexcity: O(n2) | Average depends on gap sequence | O(n log n)
   * @static
   * @param {number[]} arr
   * @memberof ShellSort
   */
  public static sort(arr: number[]) {
    const n = arr.length;
    // Start with a big gap, then reduce the gap 
    for (let gap = n / 2; gap > 0; gap /= 2) {
      gap = gap << 0;
      for (let i = gap; i < n; i += 1) { 
        let temp = arr[i]; 
        let j;             
        for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) {
          arr[j] = arr[j - gap]; 
        }
        arr[j] = temp; 
      } 
    }
  }
}