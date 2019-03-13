
/**
*  @paradigm: Brute Force | Incremental Approach
*  @Stable: Yes [ArraySortStability]
*  @SortingInPlace: Yes
*/
export default class InsertionSort {

  /**
   * TimeComplexcity: О(n2) | О(n2) | O(n)
   * @param {number[]} arr
   * @memberof InsertionSort
   */
  public static sort(arr: number[]) {
    for (let i = 0; i < arr.length; i++) {
      const key = arr[i]; 
      let j = i-1;
      while (j >= 0 && arr[j] > key) { 
          arr[j+1] = arr[j]; 
          j = j-1; 
      } 
      arr[j+1] = key; 
    }
  }

}