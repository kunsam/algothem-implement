



/*
  It picks an element as pivot and partitions the given array around the picked pivot
  @TimeComplexcity: | T(n) = T(k) + T(n-k-1) + \theta(n) |
  (two recursive calls, the last term is for the partition process. k is the number of elements which are smaller than pivot)
  The worst case |\theta(n2)| occurs when the partition process always picks greatest or smallest element as pivot
  The best case |\theta(nLogn)| occurs when the partition process always picks the middle element as pivot. 
*/

/**
 * 

 * @Stable: NO [ArraySortStability]
 * @paradigm: [DivideAndConquer]
 * @SortingInPlace: No in a typical implementation
 */
export default class QuickSort {

  public static getPartition(): (arr: number[], low: number, high: number) => number {
    return QuickSort.partition;
  }

  public static partition(arr: number[], low: number, high: number) {
    const pivot = arr[high];  
    let i = (low - 1) // Index of smaller element
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i+1], arr[high]] = [arr[high], arr[i+1]];
    return (i + 1);
  }

  public static sort(arr: number[], low: number = 0, high: number = arr.length - 1) {
    if (low < high) { 
      const pi = QuickSort.getPartition()(arr, low, high);
      QuickSort.sort(arr, low, pi - 1); 
      QuickSort.sort(arr, pi + 1, high); 
    }
  }
  


}