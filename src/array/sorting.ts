


export const testArray = [
  1, 3, 2, 3, 9, 5, 4, 2, 10, 2
];

export const testArray2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10
];



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