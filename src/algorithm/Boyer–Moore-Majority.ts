



// Time: O(N)


export default class BoyerMooreMajority {


  public static majorElement(arr: any[]): any {
    let index = 0;
    let count = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[index] === arr[i]) {
        count++;
      } else {
        count--;
      }
      if (count === 0) {
        index = i;
        count = 1;
      }
    }
    const majorElement = arr[index];
    count = 0;
    for (let i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === majorElement) {
        count++;
      } 
    }
    if (count > Math.floor(arr.length / 2)) {
      return majorElement;
    }
    return undefined;

  }


  public static test() {
    const A = [1, 3, 3, 2, 1, 1, 1];
    const element = BoyerMooreMajority.majorElement(A);
    console.log(element, 'BoyerMooreMajority')

  }

  public static wiki() {

  }


}