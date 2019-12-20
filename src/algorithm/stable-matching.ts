

export interface Ranks {
  [s: string]: string[]
}

export interface IRankData {
  key: string;
  stable?: IRankData;
  rankKeys: string[];
}

export interface IRankObject {
  [s: string]: IRankData
}

function init(rank: Ranks): IRankObject {
  const o: IRankObject = {};
  for (const k in rank) {
    o[k] = {
      key: k,
      stable: undefined,
      rankKeys: rank[k],
    };
  }
  return o;
}

function extractUnstable(Q: IRankObject): IRankData | undefined {
  for (const k in Q) {
    if (Q[k].stable === undefined) {
      return Q[k];
    }
  }
  return undefined;
}

export default class StableMatching {

  public static get(ARank: Ranks, BRank: Ranks) {
    const A: IRankObject = init(ARank);
    const B: IRankObject = init(BRank);
    let a: IRankData | undefined;
    while ((a = extractUnstable(A))) {
      const bKey = a.rankKeys.shift();
      if (!bKey) {
        break
      }
      const b = B[bKey];
      if (b.stable === undefined) {
        // 单身就交换
        a.stable = b;
        b.stable = a;
      } else {
        const rankAinB = b.rankKeys.indexOf(a.key);
        const rankPrevAinB = b.rankKeys.indexOf(b.stable.key);
        // it's index value, less mean rank high
        if (rankAinB < rankPrevAinB) {
          A[b.stable.key].stable = undefined;
          a.stable = b;
          b.stable = a;
        }
      }
    }
    return [A, B];
  }


  public static test() {
    const ARank: Ranks = {
      Flavio: ['Valentine', 'July', 'Summer', 'Violet'],
      Stephen: ['Summer', 'July', 'Valentine', 'Violet'],
      Albert: ['July', 'Violet', 'Valentine', 'Summer'],
      Jack: ['July', 'Violet', 'Valentine', 'Summer'],
    };

    const BRank: Ranks = {
      July: ['Jack', 'Stephen', 'Albert', 'Flavio'],
      Valentine: ['Flavio', 'Jack', 'Stephen', 'Albert'],
      Violet: ['Jack', 'Stephen', 'Flavio', 'Albert'],
      Summer: ['Stephen', 'Flavio', 'Albert', 'Jack'],
    };

    const result = StableMatching.get(ARank, BRank);
    console.log(result, 'result')
    return ;
  }

}