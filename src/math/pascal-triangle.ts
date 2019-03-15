


export default class PascalTriangle {

  public static get(N: number) {
    const A = new Array(N);
    for (let i = N - 1; i >= 0; i--) {
      A[i] = new Array(N);
    }
    for (let i = 0; i < N; i++) {
      for (let j = 0; j <= i; j++) {
        if (j === i || j === 0) {
          // First and last values in every row are 1
          A[i][j] = 1;
        } else {
          // Other values are sum of values just above and left of above
          A[i][j] = A[i - 1][j - 1] + A[i - 1][j];
        }
      }
    }
    return A;
  }

  public static test() {
    const result = PascalTriangle.get(9);
    console.log(result, 'result')
  }

  public static wiki() {
    return 'https://en.wikipedia.org/wiki/Pascal%27s_triangle'
  }
}