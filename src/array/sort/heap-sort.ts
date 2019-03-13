
/*
 * @Application:
 * 1. Sort a nearly sorted (or K sorted) array {
 *  PAY-ATTENTION: overall complexity will be O(k) + O((n-k)*logK),
 *  and use [InsertionSort] is O(nk)。So, when k is small use InsertionSort else
 *  use HeapSort
 * }
 * 2. k largest(or smallest) elements in an array 【TODO add link]
*/

/*
  The array now looks like this: 16 14 15 10 12 27 28,
  How many heapify operations have been performed on root of heap?
  A: last two elements in given array are the 2 maximum elements in array.
  So situation is clear, it is maxheapify which has been called 2 times
*/


/**
 * A comparison based sorting technique based on Binary Heap
 * @paradigm: [BruteForce]
 * @SortingInPlace: Yes
 */
export default class HeapSort {

    /**
   * TimeComplexcity: O(nlogn) | O(nlogn) | O(nlogn) or O(n)[equal keys] // Theta(Log n/(Log Log n)) Elements TC to O(logn)
   * @Stable: No [ArraySortStability] operations on the heap can change the relative order of equal items
   * @param {number[]} arr
   * @memberof HeapSort
   */
  public static sort(arr: number[]) {
    // Fist, rearrange to a max heap
    for (let i = arr.length / 2 - 1; i >= 0; i--) {
      // 这个值是存在max heap node 存在子节点的值, 向下取整保证至少存在
      HeapSort.heapify(arr, arr.length, Math.floor(i));
    }
    // Second, every time move root to end, and delete end, do rearrange to max heap
    for (let i = arr.length - 1; i >= 0; i--) { 
      [arr[i], arr[0]] = [arr[0], arr[i]] 
      HeapSort.heapify(arr, i, 0); 
    }
  }

  public static heapify(arr: number[], size: number, i: number) {
    let largest = i; // Initialize largest as root 

    //  Binary Heap is a Complete Binary Tree
    let l = 2*i + 1; // left = 2*i + 1 
    let r = 2*i + 2; // right = 2*i + 2
      
    // If left child is larger than root 
    if (l < size && arr[l] > arr[largest]) 
      largest = l; 
  
    // If right child is larger than largest so far 
    if (r < size && arr[r] > arr[largest]) 
      largest = r; 

    if (largest !== i) {
      [arr[i], arr[largest]] = [arr[largest], arr[i]]
      // Recursively heapify the affected sub-tree 
      HeapSort.heapify(arr, size, largest); 
    }
  }


}