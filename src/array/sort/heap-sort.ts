/**
 * A comparison based sorting technique based on Binary Heap
 * @Application:
 * 1. Sort a nearly sorted (or K sorted) array
 * 2. k largest(or smallest) elements in an array 【TODO add link】
 * @SortingInPlace: Yes
 */
export default class HeapSort{

    /**
   * TimeComplexcity: O(nlogn) | O(nlogn) | O(nlogn) or O(n)[equal keys]
   *
   * @param {number[]} arr
   * @memberof HeapSort
   */
  public static sort(arr: number[]) {
    // Fist, rearrange to a max heap
    for (let i = arr.length / 2 - 1; i >= 0; i--) {
      // 这个值是存在max heap node 存在子节点的值, 向下取整保证至少存在
      HeapSort.heapify(arr, arr.length, Math.floor(i)); // 这里很大区别啊
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