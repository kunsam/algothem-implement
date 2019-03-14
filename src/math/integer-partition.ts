




// https://en.wikipedia.org/wiki/Partition_(number_theory)
// 3 -> [3] \ [2, 1] \ [1, 1, 1]
export function getIntegerPartitions(integer: number) {
  const A: number[] = [];
  const D: number[][] = [];
  partition(A, integer, 0);
  function partition(A: number[], n: number, p: number) {
    if (n === 0) {
      D.push(A.map(a => a));
    } else {
      let end = n;
      if (p !== 0 && A[p - 1] < n) end = A[p - 1];
      for (let i = end; i > 0; i--) {
        A[p] = i;
        partition(A, n - i, p + 1);
      }
    }
  }
  return D;
}
