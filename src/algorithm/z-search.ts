





export default class ZSearch {

  public static search(text: string, pattern: string): number[] {
    const len = pattern.length + text.length + 1;

    const z = new Array(len);
    z[0] = 0;

    const concat = `${pattern}$${text}`;

    let left = 0;
    let right = 0;
    for (let i = 1; i < concat.length; i++) {
      if (i > right) {
        left = right = i;
        while (right < concat.length && concat[right] === concat[right - left]) {
          right++;
        }
        z[i] = (right - left);
        right--;
      } else if (z[i - left] < (right - i + 1)) {
        // need to understand
        // 没超边界，copy prefix 中的 z value 过来
        // 向 i 偏移 i - left 位存在的前缀长度小于到右边的位数(也就是说没有越界)
        z[i] = z[i - left];
      } else {
        left = i;
        while (right < concat.length && concat[right] === concat[right - left]) {
          right++;
        }
        z[i] = (right - left);
        right--;
      }
    }

    let positions: number[] = [];
    for (let i = 0; i < len; i++) {
      if (z[i] === pattern.length) {
        const pos = i - (pattern.length + 1);
        positions.push(pos);
        console.log(`Pattern Found at index ${pos}`);
      }
    }
    return positions;
  }

  public static test() {
    let pattern = "aab";
    let text = "aabxaabxcaabxaabxay";
    // const pattern = 'abc';
    // const text = 'xabcabzabc';
    ZSearch.search(text, pattern);

    return true;
  }

  public static wiki() {
    // TODO 这里可以放一个连接数组，tag: wiki, link: xxx
  }
}