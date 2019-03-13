




/**
 * Counting sort algorithm is efficient when range of data to be sorted is fixed like sort string consisting of ASCII characters
 * linear time sorting algorithm
 * @paradiam: Divide and Conquer
 */
export default class CountingSort{ 

  /**
   * TimeComplexity:  O(n+k) 
   * Auxiliary Space: O(n+k)
   * @static
   * @param {number[]} arr
   * @memberof CountingSort
   */
  public static sort(arr: number[]) {
    const max = Math.max(...arr);
    const counts = new Array(max + 1).fill(0);
    // store counts of each number
    for (let i = 0; i < arr.length; i++) {
      const number = arr[i];
      counts[number]++;
    }

    // calculate the prefix sums
    for (let i = 1; i <= max; i++) {
      counts[i] += counts[i - 1];
    }

    const sortedArray = new Array(arr.length);

    for (let i = arr.length - 1; i >= 0; i--) {
      const number = arr[i];
      const count = counts[number];
      sortedArray[count - 1] = number;
      counts[number]--;
    }
  }
  
}