

// You have to sort 1 GB of data with only 100 MB of available main memory. 


/*
handling slow-to-access sequential media
has a consistent speed on any size of data
Merge sort is often the best choice for sorting a linked list (requires only Θ(1) extra space)
*/


/**
 * comparison-based sorting algorithm
 * @Stable: Yes [ArraySortStability]
 * @paradigm: [DivideAndConquer]
 * @SortingInPlace: No in a typical implementation
 */
export default class MergeSort {
  /**
   * @TimeComplexcity: O(nlogn) | O(nlogn) | O(nlogn) typical, O(n) natural variant 
   * @auxiliary space: Θ(n)
   * @static
   * @param {number[]} arr
   * @memberof MergeSort
   */
  public static sort(arr: number[], leftIndex: number = 0, rightIndex?: number) {
    rightIndex = rightIndex === undefined ? arr.length - 1 : rightIndex;
    if (leftIndex < rightIndex) {
      const m = Math.floor(leftIndex + (rightIndex - leftIndex)/2);
      MergeSort.sort(arr, leftIndex, m);
      MergeSort.sort(arr, m+1, rightIndex);
  
      const n1 = m - leftIndex + 1;
      const n2 = rightIndex - m;
      const left = [];
      const right = [];
      for (let i = 0; i < n1; i++) left[i] = arr[leftIndex + i]; 
      for (let j = 0; j < n2; j++) right[j] = arr[m + 1+ j];
  
      let i = 0; // Initial index of first subarray 
      let j = 0; // Initial index of second subarray 
      let k = leftIndex; // Initial index of merged subarray 
      while (i < n1 && j < n2) { 
        if (left[i] <= right[j]) { 
            arr[k] = left[i]; 
            i++; 
        } 
        else { 
            arr[k] = right[j]; 
            j++; 
        } 
        k++; 
      }
      while (i < n1) { 
          arr[k] = left[i]; 
          i++; 
          k++; 
      }
      while (j < n2) { 
        arr[k] = right[j]; 
        j++; 
        k++; 
      } 
    }
  }
}