


export interface SackItem{
  value: number,
  weight: number
}

// 动态规划问题在前端中很常见，要好好理解，
// 在动态规划问题中 边界条件，循环构建，对某个子项的抽象联系建立

// 转换为 sack * weight 

// 也可以使用贪心算法

// Knapsack problem
// https://en.wikipedia.org/wiki/Knapsack_problem
export function knapsackMaxValue(items: SackItem[], maxWeight: number) {
  const N = items.length;

  const DP = new Array(N + 1);
  for (let i = 0; i < N + 1; i++) {
    DP[i] = new Array(maxWeight + 1);
    for (let j = 0; j < maxWeight + 1; j++) {
      DP[i][j] = 0;
    }
  }

  for (let i = 0; i <= N; i++) {
    // for a sack
    for (let j = 0; j <= maxWeight; j++) {
      // j is a unit weight
      if (i === 0 || j === 0) {
        /*
          If we have no items or maximum weight we can take in collection is 0
          then the total weight in our collection is 0
        */
        DP[i][0] = 0;
      } else if (items[i - 1].weight <= j) {
        // take the current item in our collection
        const A = items[i - 1].value + DP[i - 1][j - items[i - 1].weight];
        const B = DP[i - 1][j];
        /*
          find the maximum of these two values
          and take which gives us a greater weight
        */
        if (A > B) {
          DP[i][j] = A;
        } else {
          DP[i][j] = B;
        }
      } else { // leave the current item from our collection
        DP[i][j] = DP[i - 1][j];
      }
    }
  }

  return DP[N][maxWeight];
}







