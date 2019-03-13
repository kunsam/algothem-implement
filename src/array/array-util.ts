



export function swapArrayElement(i: number, j: number, arr: any[]) {
  if (i === j) {
    return false;
  }
  if ( i < 0 || i > arr.length - 1) {
    return false;
  }
  if ( j < 0 || j > arr.length - 1) {
    return false;
  }
  // const temp = arr[i];
  // arr[i] = arr[j];
  // arr[j] = temp;
  [arr[i], arr[j]] = [arr[j], arr[i]];
  return true;
}