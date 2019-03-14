import { AlgorithmBase } from "./base";


export default class Levenshteins implements AlgorithmBase {

  public static distance(str1: string, str2: string) {
    const table = new Array(str1.length + 1);
    for (let i = 0; i < str1.length + 1; i++) {
      table[i] = new Array(str2.length + 1).fill(-1);
      table[i][0] = i;
    }
    for (let i = 1; i < str2.length + 1; i++) {
      table[0][i] = i;
    }
    for (let i = 1; i < str1.length + 1; i++) {
      for (let j = 1; j < str2.length + 1; j++) {
        if (str1[i - 1] === str2[j - 1]) {
          table[i][j] = table[i - 1][j - 1];
        } else {
          table[i][j] = Math.min(table[i - 1][j], table[i][j - 1], table[i - 1][j - 1]) + 1;
        }
      }
    }
    return table[str1.length][str2.length];
  }

  public static test() {
    const str1 = 'stack';
    const str2 = 'racket';
    const distance = Levenshteins.distance(str1, str2);
    console.log(distance, 'distance')
    return false;
  }

  public static wiki() {
    return 'https://en.wikipedia.org/wiki/Levenshtein_distance'
  }
}