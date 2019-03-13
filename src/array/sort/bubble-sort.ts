import { swapArrayElement } from "../array-util";


/**
 * 冒泡排序
 * @paradigm: [BruteForce]
 * @Stable: Yes [ArraySortStability]
 * @SortingInPlace: Yes
 */
export default class BubbleSort {

  // WorstCase 情况小的在尾部
  /**
   * @TimeComplexity: O(n^2) | O(n^2) | O(n^2)
   * @AuxiliarySpace: O(1)
   * @export
   * @param {any[]} arr
  */
  public static sort(arr: number[]) {
    for (let i: number = 0; i < arr.length - 1; i++) {
      for(let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
          swapArrayElement(j+1, j, arr);
        }
      }
    }
  }

  /**
   * @TimeComplexity: O(n)[Best In Already Sorted] | O(n^2) | O(n^2)
   * @export
   * @param {any[]} arr
   */
  public static optimaze_sort(arr: any[]) {
    let swapped: boolean;
    for (let i: number = 0; i < arr.length - 1; i++) {
      swapped = false; 
      for(let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j + 1] < arr[j]) {
          swapArrayElement(j+1, j, arr);
          swapped = true;
        }
      }
      // ## IF no two elements were swapped by inner loop, then break
      if (swapped == false) break;
    }
  }


}

