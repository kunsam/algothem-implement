

interface LISData{
  value: number;
  preIndex?: number;
}

export default class LongestIncreasingSequence {


  public static get(arr: number[]) {

    const LIS: LISData[] = new Array(arr.length);

    // Initialize LIS values for all indexes
    for (let i = 0; i < arr.length; i++) {
      LIS[i] = { value: 1 }
    }
    // Compute optimized LIS values in bottom up manner
    for (let i = 1; i < arr.length; i++) {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j] && LIS[i].value < LIS[j].value + 1) {
          LIS[i].value = LIS[j].value + 1;
          LIS[i].preIndex = j;
        }
      }
    }
    // Pick maximum of all LIS values
    let maxIndex: number = 0;
    let max: number = LIS[0].value;
    for (let i = 1; i < arr.length; i++) {
      if (max < LIS[i].value) {
        max = LIS[i].value;
        maxIndex = i;
      }
    }
    let sequence: number[] = [];
    if (maxIndex) {
      let currentIndex: number | undefined = maxIndex;
      while(currentIndex !== undefined) {
        sequence.unshift(arr[currentIndex]);
        currentIndex = LIS[currentIndex].preIndex;
      }
    }
    return sequence;
  }

  public static test() {

    const arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15]
    const result = LongestIncreasingSequence.get(arr);
    console.log(result, 'resultresult')
    return true;
  }

  public static wiki() {

  }
}