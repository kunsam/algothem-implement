

function partition(arr: number [],l: number = 0, r: number = arr.length - 1) {
  let x = arr[r], i = l; 
  for (let j = l; j <= r - 1; j++) { 
    if (arr[j] <= x) { 
      [arr[i], arr[j]] = [arr[j], arr[i]]
      i++;
    }
  } 
  [arr[i], arr[r]] = [arr[r], arr[i]]
  return i; 
}

function randomPartition(arr: number [],l: number = 0, r: number = arr.length - 1) {
  let n = r-l+1; 
  let pivot = Math.floor(Math.random() * (n + 1)); 
  [arr[l + pivot], arr[r]] = [arr[r], arr[l + pivot]] 
  return partition(arr, l, r);
}

export default function ArrayKthSmallest(arr: number [], k: number, l: number = 0, r: number = arr.length - 1): number | undefined {
  // If k is smaller than number of elements in array 
  if (k > 0 && k <= r - l + 1) { 
    // Partition the array around last element and get 
    // position of pivot element in sorted array 
    let pos = randomPartition(arr, l, r); 
    // If position is same as k 
    if (pos-l == k-1) 
      return arr[pos]; 
    if (pos-l > k-1)  // If position is more, recur for left subarray 
      return ArrayKthSmallest(arr, l, pos-1, k); 
    // Else recur for right subarray 
    return ArrayKthSmallest(arr, pos+1, r, k-pos+l-1); 
  } 
  // If k is more than number of elements in array 
  return undefined;
}