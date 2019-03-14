


// This was the first linear-time algorithm for string matching. 


// The KMP algorithm has a better worst-case performance than the straightforward algorithm.
// KMP spends a little time precomputing a table (on the order of the size of W[], O(n)),
// and then it uses that table to do an efficient search of the string in O(k)

// general search take O(mn) and KMP search take O(m+n)

function mod (self: number, n: number) {
  return ((self % n) + n) % n;
};


function tracker(substring: string) {
  let i = 1;
  let j = 0;
  let track: number[] = new Array(substring.length).fill(0);
  // console.log(track, substring.length, 'track')
  while (i < track.length) {
    while ((substring[i] !== substring[j]) && (j > 0)) {
      j = track[j - 1];
    }
    if (substring[i] === substring[j]) {
      track[i] = ++j;
    } else {
      track[i] = 0;
    }
    i++;
  }
  return track;
}

// 我觉得这个很有学习的必要
// 巧用 suffix/prefix的关系。 当放生比较失败后，重新开始的位置回到存在suffix的prefix的后面位置
export default function knuthMorrisPrattSearch(string: string, substr: string) {

  let track = tracker(substr);
  let j = 0;
  let startPos;
  const positions = [];
  for (let i = 0; i < string.length; i++) {
    if (string[i] === substr[j]) {
      if (j === substr.length - 1) {
        startPos = i - substr.length + 1;
        positions.push(startPos);
      } else {
        j++;
      }
    } else {
      const tempJ = mod(j - 1, substr.length);
      j = track[tempJ];
    }
  }
  return positions;
}



export function testKMP() {

  function randString(length: number) {
    const result = Math.random().toString(36);
    return result.substring(result.length - length);
  }

  // const string = randString(15);
  // const startIndex = Math.floor(Math.random() * 10); // Random start index from 0 to 9
  // const substring = string.substr(startIndex, 5); // Substring of `string` of length 5
  let string = 'abcxabcdabxabcdabcdabxabcda', substring = 'xabcda';
  // let string = 'abcxabcdabxabcdabcdabcyiuhsiuhduiahdubhbuuabcdabcysbhbh', substring = 'abcdabcy';

  const positions = knuthMorrisPrattSearch(string, substring);

  console.log(`Substring positions are: ${positions.length ? String(positions) : 'NONE'}`);
}
