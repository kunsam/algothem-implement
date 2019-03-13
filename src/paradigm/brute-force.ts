


const CONSTANT_MEMEBER = [
  'BubbleSort'
]

/**
 * wiki: [https://en.wikipedia.org/wiki/Brute-force_search]
 *
 * @export
 * @class BruteForceAlgorithm
 */
export default class BruteForceAlgorithm{

  public set: Set<string>
  
  constructor() {
    this.set = new Set();
    CONSTANT_MEMEBER.forEach(k => this.set.add(k));
  }

  public register(key: string) {
    this.set.add(key);
  }

  public log() {
    this.set.forEach(k => {
      console.log(k, 'this.set');
    })
  }

}