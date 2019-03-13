


/*
  It is a distribution sort,
  a generalization of pigeonhole sort,
  and is a cousin of radix sort in the most-to-least significant digit flavor
*/

/**
 * Bucket sort is mainly useful when input is uniformly distributed over a range
 * @paradigm: DivideAndConquer
 */
export default class BucketSort {
  public static BUCKETS_NUMBER = 5; // the number of buckets

  /**
   * @TimeComplexity: O(n2) | O(n + n2 / k + k) (k is the number of buckets) | 
   * @Space: O(n*k) worst space
   * @static
   * @param {number[]} array
   * @memberof BucketSort
   */
  public static sort(array: number[]) {

    const buckets: number[][] = [...new Array(BucketSort.BUCKETS_NUMBER)].fill(null).map(() => []);
    const max = Math.max(...array);
    // distribute the elements into the buckets
    for (let i = 0; i < array.length; i++) {
      const number = array[i];
      const bucketIndex = Math.floor(number / (max + 1) * BucketSort.BUCKETS_NUMBER);
      const bucket = buckets[bucketIndex];
      bucket.push(number);
      // insertion sort within the bucket
      let j = bucket.length - 1;
      while (j > 0 && bucket[j - 1] > bucket[j]) {
        const temp = bucket[j - 1];
        bucket[j - 1] = bucket[j];
        bucket[j] = temp;
        j--;
      }
    }

    let i = 0;
    for (let bucketIndex = 0; bucketIndex < BucketSort.BUCKETS_NUMBER; bucketIndex++) {
      const bucket = buckets[bucketIndex];
      for (let j = 0; j < bucket.length; j++) {
        array[i] = bucket[j];
        i++;
      }
    }

  }
}