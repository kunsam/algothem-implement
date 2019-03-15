


export default class LongestPalindromicSequence {

  public static get(string: string) {
    const N = string.length;
    const L = new Array(N);
    let i;
    let j;
    for (i = 0; i < N; i++) {
      L[i] = new Array(N);
    }
    for (i = 0; i < N; i++) {
      L[i][i] = 1;
    }
    for (i = 2; i <= N; i++) {
      for (j = 0; j < N - i + 1; j++) {
        const k = j + i - 1;
        if (string[j] === string[k] && i === 2) {
          L[j][k] = 2;
        } else if (string[j] === string[k]) {
          L[j][k] = L[j + 1][k - 1] + 2; // 去掉两个两边的值得结果
        } else {
          // 传递，任意去掉一个的最大值
          L[j][k] = Math.max(L[j + 1][k], L[j][k - 1]);
        }
      }
    }

    console.log(L[0][N - 1], L[0][N - 1], 'lll')

  }

  public static test() {

    const string = 'BBABCBCAB'
    const result = LongestPalindromicSequence.get(string);
    console.log(result, 'resultresult')
    return true;
  }

  public static wiki() {

  }
}