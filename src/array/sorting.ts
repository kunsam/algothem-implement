


export const testArray = [
  1, 3, 2, 3, 9, 5, 4, 2, 10, 2
];

export const testArray2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];

export function SwapArrayElement(i: number, j: number, arr: any[]) {
  if (i === j) return;
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export function SelectionSort(arr: any[], needStatble?: boolean) {
  let minIndex: number;
  for (let i: number = 0; i < arr.length - 1; i++) {
    minIndex = i;
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (!needStatble) {
      SwapArrayElement(i, minIndex, arr);
    } else {
      // 不选择交换，而是在 i 处 插入最小值并且全部向前移一位
      const key = arr[minIndex];
      while (minIndex > i)  
      { 
          arr[minIndex] = arr[minIndex - 1]; 
          minIndex--; 
      } 
      arr[i] = key;
    }

  }
}


export function BubbleSort(arr: any[]) {
  for (let i: number = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        SwapArrayElement(j+1, j, arr);
      }
    }
  }
}

export function BubbleSortOptimaze1(arr: any[]) {
  let swapped: boolean;
  for (let i: number = 0; i < arr.length - 1; i++) {
    swapped = false; 
    for(let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        SwapArrayElement(j+1, j, arr);
        swapped = true;
      }
    }
    // ## IF no two elements were swapped by inner loop, then break
    if (swapped == false) break;
  }
}

export function InsertionSort(arr: any[]) {
  for (let i = 0; i < arr.length; i++) {
    const key = arr[i]; 
    let j = i-1;
    // 我怎么老是构思不出这种运算呢!
    while (j >= 0 && arr[j] > key) { 
        arr[j+1] = arr[j]; 
        j = j-1; 
    } 
    arr[j+1] = key; 
  }
}

export class HeapSort{
  public heapify(arr: any[], size: number, i: number) {
      let largest = i; // Initialize largest as root 
      let l = 2*i + 1; // left = 2*i + 1 
      let r = 2*i + 2; // right = 2*i + 2 
    
      // If left child is larger than root 
      if (l < size && arr[l] > arr[largest]) 
          largest = l; 
    
      // If right child is larger than largest so far 
      if (r < size && arr[r] > arr[largest]) 
          largest = r; 
    
      // If largest is not root 
      if (largest != i) { 
        SwapArrayElement(i, largest, arr); 
          // Recursively heapify the affected sub-tree 
        this.heapify(arr, size, largest); 
      }
  }
  public sort(arr: any[]) {
    // ## 这里我当时很不太理解
    for (let i = arr.length / 2 - 1; i >= 0; i--) { 
      this.heapify(arr, arr.length, i);
    }
    for (let i= arr.length - 1; i >= 0; i--) { 
      // Move current root to end 
      SwapArrayElement(0, i, arr); 
      // call max heapify on the reduced heap 
      this.heapify(arr, i, 0); 
    }
  }
}


export class QuickSort {
  public static partition(arr: any[], low: number, high: number) {
      const pivot = arr[high];  
      let i = (low - 1)  // Index of smaller element
      for (let j = low; j <= high- 1; j++) {
          if (arr[j] <= pivot) {
              i++;
              SwapArrayElement(i, j ,arr);
          }
      }
      SwapArrayElement(i+1, high, arr);
      return (i + 1)
  }
  public static sort(arr: any[], low: number, high: number) {
    if (low < high) { 
        const pi = QuickSort.partition(arr, low, high); 
        QuickSort.sort(arr, low, pi - 1); 
        QuickSort.sort(arr, pi + 1, high); 
    }
  }
}

export function MergeSortWithArray(array1: number[], array2: number[]) {
  let i = 0;
  let j = 0;
  let k = 0;
  const mergedArray = [];
  while (i < array1.length && j < array2.length) { 
    if (array1[i] <= array2[j]) { 
      mergedArray[k] = array1[i]; 
      i++;
    }  else { 
      mergedArray[k] = array2[j]; 
      j++; 
    }
    k++;
  }
  while (i < array1.length) { 
    mergedArray[k] = array1[i]; 
    i++; 
    k++; 
  }
  while (j < array2.length) { 
    mergedArray[k] = array2[j]; 
    j++; 
    k++; 
  }
  return mergedArray;
}

export function MergeSort(arr: any[], leftIndex: number = 0, rightIndex?: number) {
  rightIndex = rightIndex === undefined ? arr.length - 1 : rightIndex;
  if (leftIndex < rightIndex) {
    const m = Math.floor(leftIndex + (rightIndex - leftIndex)/2);
    MergeSort(arr, leftIndex, m);
    MergeSort(arr, m+1, rightIndex);

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


// const testArray3 = [4, 2, 1, 3, 2, 10, 3, 5, 1, 6];
// MergeSort(testArray3)
// SelectionSort(testArray);
// BubbleSort(testArray);
// InsertionSort(testArray);
// console.log(testArray3, 'testArray')