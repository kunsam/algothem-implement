

export interface MOQuery{
  L: number,
  R: number
}


export default class MOsAlgorithm{

  public static query(arr: number[], queries: MOQuery[]) {
    const block = Math.sqrt(arr.length); 

    const sortedQueries = queries.sort((x, y) => {
    // Different blocks, sort by block. 
      if (x.L / block !== y.L / block) {
        return x.L/block - y.L/block; 
      }
      // Same block, sort by R value 
      return x.R - y.R;
    });
    console.log(sortedQueries, 'sortedQueries')

    // Initialize current L, current R and current sum 
    let currL = 0, currR = 0; 
    let currSum = 0; 
  
    // Traverse through all queries 
    for (let i = 0; i < queries.length; i++) { 
      // L and R values of current range 
      let L = queries[i].L, R = queries[i].R; 
      // Remove extra elements of previous range. For 
      // example if previous range is [0, 3] and current 
      // range is [2, 5], then a[0] and a[1] are subtracted 
      while (currL < L) { 
          currSum -= arr[currL]; 
          currL++; 
      } 
      // Add Elements of current Range 
      while (currL > L) { 
          currSum += arr[currL-1]; 
          currL--; 
      }
      while (currR <= R) { 
        currSum += arr[currR]; 
        currR++; 
      } 
      // Remove elements of previous range.  For example 
      // when previous range is [0, 10] and current range 
      // is [3, 8], then a[9] and a[10] are subtracted 
      while (currR > R+1) { 
        currSum -= arr[currR-1]; 
        currR--; 
      }

      console.log('current range sum:', currSum);
    }
    return currSum;
  }

  public static test() {
    MOsAlgorithm.query(
      [1, 1, 2, 1, 3, 4, 5, 2, 8],
      [ { L: 0, R: 4}, { L: 1, R: 3 }, { L: 2, R: 4} ]
    )
  }

}