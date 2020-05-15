/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
// eslint-disable-next-line no-unused-vars
class HitCounter {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.cache = new Map();
  }

  /**
 * Record a hit.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {void}
 */
  hit(timestamp) {
    if (this.cache.has(timestamp)) this.cache.set(timestamp, this.cache.get(timestamp) + 1);
    else this.cache.set(timestamp, 1);
  }

  /**
 * Return the number of hits in the past 5 minutes.
        @param timestamp - The current timestamp (in seconds granularity). 
 * @param {number} timestamp
 * @return {number}
 */
  getHits(timestamp) {
    let start = timestamp - 300 < 1 ? 1 : timestamp - 300 + 1;
    let count = 0;
    for (let i = start; i <= timestamp; i++) {
      if (this.cache.has(i)) {
        count += this.cache.get(i);
      }
    }
    return count;
  }
}
