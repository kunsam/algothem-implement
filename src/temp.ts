
import PancakeSort from "./array/sort/pancake-sort";
import BucketSort from "./array/sort/bucket-sort";
import MergeSort from "./array/sort/merge-sort";
import PigeonholeSort from "./array/sort/pigeonhole-sort";
import QuickSort from "./array/sort/quick-sort";
import RadixSort from "./array/sort/radix-sort";
// import ShellSort from "./array/sort/shell-sort";


const array1 = [ 2, 4, 5, 6, 1];
const array2 = [ 6, 5, 4, 3, 2];
const array3 = [ 2, 3, 4, 5, 6];

RadixSort.sort(array1);
// PancakeSort.sort(array3);
// BucketSort.sort(array1);
// ShellSort

console.log(array1, array3, 'RadixSort')