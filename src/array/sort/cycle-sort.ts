import { swapArrayElement } from "../array-util";



/*
某一个位置的元素需要找到一个正确位置: 移动到比它小的全部元素后面
被替换的过来的元素重复此操作，直到正确位置就是当前
*/

/**
 * This sorting algorithm is best suited for situations where memory write or swap operations are costly
 * @paradigm: [BruteForce]
 * @Stable: No [ArraySortStability]
 */
export default class CycleSort{ 

  /**
   * TimeComplexcity: Θ(n2) | Θ(n2) | Θ(n2)
   *
   * @static
   * @param {number[]} arr
   * @memberof CycleSort
   */
  public static sort(arr: number[]) {
    let writes = 0; // just for records

    // 对于某个位置的元素，找到一个位置，该位置是之前的全部元素都小于等于元素值
    function getElementPosition(startIndex: number,) {
      const  currentValue: number = arr[startIndex];
      let position = arr.reduce((
        prev, current, currentIndex
      ) => currentIndex >= startIndex + 1 && current < currentValue ? prev + 1 : prev, startIndex);
      if (position !== startIndex) {
        while (currentValue == arr[position]) {
          position += 1;
        }
      }
      return position;
    }

    // 如果找到起始位置的替换位置，若不为自身，则交换两位置元素，增加一次写入
    function getPositionAndSwap(start: number) {
      const findPosition = getElementPosition(start);
      if (findPosition !== start) { 
        swapArrayElement(start, findPosition, arr); 
        writes++;
        return true;
      }
      return false;
    }

    for (let cycle_start = 0; cycle_start <= arr.length - 2; cycle_start++) {
      while (getPositionAndSwap(cycle_start)) {
        getPositionAndSwap(cycle_start);
      }
    }
    return writes;
  }
}

export function CycleSortSortTest() {
  // const array = [ 4, 5, 2, 3, 4, 6, 7, 1];
  const array1 = new Array( Math.random() * 10 << 0, ).fill(null).map(_ => Math.random() * 100 << 0);
  // CycleSort.sort(array);
  // console.log(array, 'CycleSort.sort(array)')
  console.log(array1.map(a => a), array1.length, 'array1')
  CycleSort.sort(array1);
  console.log(array1, 'CycleSort.sort(array1)')
}