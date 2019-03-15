
const D = [-2, -3, 4, -1, -2, 1, 5, -3];

const maxSubarraySum = (function maxSubarray(array) {
  let maxSoFar = 0;
  let maxEndingHere = 0;

  for (let i = 0; i < array.length; i++) {
    maxEndingHere += array[i];
    if (maxEndingHere < 0) {
      maxEndingHere = 0;
    }
    if (maxSoFar < maxEndingHere) {
      maxSoFar = maxEndingHere;
    }
  }

  return maxSoFar;
}(D));

