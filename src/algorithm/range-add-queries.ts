

export interface RangeQuery {
  low: number;
  high: number;
  value: number
}

// https://www.geeksforgeeks.org/constant-time-range-add-operation-array/
export default class RangeAddQueries{

  public static add(arr: number[], queries: RangeQuery[]) {
    queries.forEach(q => {
      RangeAddQueries.addUtil(arr, q.low, q.high, q.value);
    });
    RangeAddQueries.update(arr);

  }

  public static addUtil(arr: number[], low: number, high: number, value: number) {
    arr[low] += value; 
    if (high != arr.length - 1) {
      arr[high + 1] -= value; 
    }

  }

  public static update(arr: number[]) {
    //  convert array into prefix sum array 
    for (let i = 1; i < arr.length; i++) 
      arr[i] += arr[i - 1]; 
  }

  public static test() {
    // const arr = [ 100, 1, 230, 230, 420, 232, 333, 92, 44 ];
    const arr = new Array(10).fill(0);
    const addQueries = [
      { low: 0, high: 2, value: 10 },
      { low: 3, high: 6, value: 100 },
      { low: 7, high: 8, value: 1 },
    ];

    RangeAddQueries.add(arr, addQueries);
    console.log(arr, 'arrarrarr')

  }
}