
// The shortest common supersequence (SCS) of two sequences `X` and `Y`
// is the shortest sequence which has `X` and `Y` as subsequences.

export default class ShortestCommonSequence {

  public static get(string1: string, string2: string): string {

    const m = string1.length;
    const n = string2.length;

    const A = new Array(m + 1);
    for (let i = 0; i < m + 1; i++) {
      A[i] = new Array(n + 1);
    }

    let i;
    let j;
    // Build the memo table in bottom up fashion
    for (i = 0; i <= m; i++) {
      for (j = 0; j <= n; j++) {
        if (i === 0) {
          A[i][j] = j;
        } else if (j === 0) {
          A[i][j] = i;
        } else if (string1[i - 1] === string2[j - 1]) {
          A[i][j] = A[i - 1][j - 1] + 1;
        } else {

          // min is more shorter
          if (A[i - 1][j] < A[i][j - 1]) {
            A[i][j] = 1 + A[i - 1][j];
          } else {
            A[i][j] = 1 + A[i][j - 1];
          }

        }
      }
    }


    i = m;
    j = n;
    let finalString = '';
    while (i >= 1 && j >= 1) {
      if (string1[i - 1] === string2[j - 1]) {
        finalString = string1[i - 1] + finalString;
        i--;
        j--;
        continue;
      }
      if (A[i - 1][j] === A[i][j - 1]) {
        // 有两种形式，相等的时候都可以
        finalString = finalString + string1[i - 1];
        i--;
      } else if (A[i - 1][j] < A[i][j - 1]) {
        finalString = string1[i - 1] + finalString;
        i--;
      } else {
        finalString = string2[j - 1] + finalString;
        j--;
      }
    }
    // while(i >= 1) {
    //   finalString = string1[i - 1] + finalString;
    //   i--;
    // }
    // while(j >= 1) {
    //   finalString = string2[j - 1] + finalString;
    //   j--;
    // }
    console.log(A[m][n],i ,j, 'A[m][n]')
    return finalString;
  }

  public static test() {

    const string1 = 'AGGTAB';
    const string2 = 'GXTXAYB';
    const result1 = ShortestCommonSequence.get(string1, string2);
    console.log(result1, 'result1 AGXGTXAYB')
    const result2 = ShortestCommonSequence.get('geek', 'eke');
    console.log(result2, 'result2 geeke')
    return true;
  }

  public static wiki() {

  }
}