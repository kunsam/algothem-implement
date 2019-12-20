export const testArray = [1, 3, 2, 3, 9, 5, 4, 2, 10, 2];

export const testArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// The method starts by sorting pairs of elements far apart from each other, then progressively reducing the gap between elements to be compared

export class QuickSort {
  public static partition(arr: any[], low: number, high: number) {
    const pivot = arr[high];
    let i = low - 1; // Index of smaller element
    for (let j = low; j <= high - 1; j++) {
      if (arr[j] <= pivot) {
        i++;
        SwapArrayElement(i, j, arr);
      }
    }
    SwapArrayElement(i + 1, high, arr);
    return i + 1;
  }
  public static sort(arr: any[], low: number, high: number) {
    if (low < high) {
      const pi = QuickSort.partition(arr, low, high);
      QuickSort.sort(arr, low, pi - 1);
      QuickSort.sort(arr, pi + 1, high);
    }
  }
}
