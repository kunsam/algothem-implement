import { binomialCoefficient } from "./binomial-coefficient";



export class CatalanNumber {


  // 多项式时间复杂度
  public static getInBasicWay(n: number) {
      // Base case 
      if (n <= 1) return 1; 
      // catalan(n) is sum of catalan(i)*catalan(n-i-1) 
      let res: number = 0; 
      for (let i=0; i<n; i++) 
          res += CatalanNumber.getInBasicWay(i)*CatalanNumber.getInBasicWay(n-i-1); 
      return res;
  }

  // O(n2)
  public static getInDynamicProgrammingWay(n: number) {
    let catalan: number[] = [];
    catalan[0] = catalan[1] = 1;
    for (let i = 2; i < n; i++) {
      catalan[i] = 0;
      for(let j = 0; j < i; j++) {
        catalan[i] += catalan[j] + catalan[i - j - 1];
      }
    }
    return catalan[n];
  }

  // O(n)
  public static getFromBinomialCoefficient(n: number) {
    return binomialCoefficient(2*n, n) / (n+1); 
  }
}