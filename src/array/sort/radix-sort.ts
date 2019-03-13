


/*
a non-comparative integer sorting algorithm that sorts data with integer keys by
grouping keys by the individual digits which share the same significant position and value

Counting sort is a linear time sorting algorithm that sort in O(n+k)
time when elements are in range from 1 to k.

We can’t use counting sort because counting sort will take O(n2) which is worse than comparison based sorting algorithms.
Can we sort such an array in linear time? —— Radix Sort

d digits in input integers
O(d*(n+b)) time where b is the base for representing numbers, for example, for decimal system, b is 10
overall time complexity is O((n+b) * logb(k))
The constant factors hidden in asymptotic notation are higher for Radix Sort and Quick-Sort uses hardware caches more effectively.
Also, Radix sort uses counting sort as a subroutine and counting sort takes extra space to sort numbers.

*/



function pow(base: number, expo: number) {
  let ans = 1;
  for (let i = 0; i < expo; i++) {
    ans *= base;
  }
  return ans;
}


export default class RadixSort{

  /**
   * 
   * @static
   * @param {number[]} arr
   * @memberof RadixSort
   */
  public static sort(arr: number[]) {

    const D = [
      arr,
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    ];

    function digit(i: number, exp: number) {
      return D[0][i] / pow(10, exp) % 10;
    }

    for (let exp = 0; exp < 3; exp++) {
      let i;
      for (i = 0; i < D[0].length; i++) {
        const d = digit(i, exp);
        D[2][d] += 1;
      }
      for (i = 1; i < 10; i++) {
        D[2][i] += D[2][i - 1];
      }
      for (i = D[0].length - 1; i >= 0; i--) {
        const d = digit(i, exp);
        D[2][d] -= 1;
        D[1][D[2][d]] = D[0][i];
      }
      for (i = 0; i < D[0].length; i++) {
        D[0][i] = D[1][i];
      }
      for (i = 0; i < 10; i++) {
        D[2][i] = 0;
      }
    }

  }

}