import { swapArrayElement } from "../array-util";


const SHRINK_RATE = 1.3; // shrink factor

/*
  梳排序是改良自泡沫排序和快速排序，要旨更快消除乌龟，亦即在阵列尾部的小数值，这些数值是造成泡沫排序缓慢的主因
  CombSort, 将待排序序列通过增量分为若干个子序列，然后对子序列进行一趟冒泡排序，一步步减小增量，直至增量为1。
*/

/**
 * 梳排序:
 * @paradigm: [BruteForce]
 * @Stable: No [ArraySortStability]
 * @SortingInPlace: Yes
 */
export default class CombSort {
  /**
   * @TimeComplexity: O(nlogn) | O(n^2 /(2^p)) | O(n^2)
   * p is the number of increments
   * @static
   */
  public static sort(array: number[]) {
    let swapped;
    let gap = array.length;
    do {
      gap = Math.floor(gap / SHRINK_RATE); // 也叫 increments
      if (gap < 1) { gap = 1;}
      swapped = false;
      for (let i = 0; i + gap < array.length; i++) {
        if (array[i] > array[i + gap]) {
          swapped = swapArrayElement(i, i+ gap, array)
        }
      }
    } while (gap !== 1 || swapped);
  }
}






