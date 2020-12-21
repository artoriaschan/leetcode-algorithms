/**
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */
// eslint-disable-next-line no-unused-vars
class Leaderboard {
  constructor() {
    this.cache = new Map();
  }
  /**
   * @param {number} playerId
   * @param {number} score
   * @return {void}
   */

  addScore(playerId, score) {
    if (this.cache.has(playerId)) {
      this.cache.set(playerId, this.cache.get(playerId) + score);
    } else {
      this.cache.set(playerId, score);
    }
  }

  /**
   * @param {number} K
   * @return {number}
   */
  top(K) {
    return Array.from(this.cache.values())
      .sort((a, b) => b - a)
      .slice(0, K)
      .reduce((a, b) => a + b, 0);
  }

  /**
   * @param {number} playerId
   * @return {void}
   */
  reset(playerId) {
    this.cache.set(playerId, 0);
  }
}
