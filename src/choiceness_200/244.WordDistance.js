/**
 * Your WordDistance object will be instantiated and called as such:
 * var obj = new WordDistance(words)
 * var param_1 = obj.shortest(word1,word2)
 */
// eslint-disable-next-line no-unused-vars
class WordDistance {
  /**
   * @param {string[]} words
   */
  constructor(words) {
    this.list = words;
  }

  /**
   * @param {string} word1
   * @param {string} word2
   * @return {number}
   */
  shortest(word1, word2) {
    const len = this.list.length;
    let distance = Infinity;
    let index1 = -1;
    let index2 = -1;
    for (let i = 0; i < len; i++) {
      if (this.list[i] === word1) {
        index1 = i;
        if (index2 >= 0) {
          distance = Math.min(distance, Math.abs(index1 - index2));
        }
      } else if (this.list[i] === word2) {
        index2 = i;
        if (index1 >= 0) {
          distance = Math.min(distance, Math.abs(index1 - index2));
        }
      }
    }
    return distance;
  }
}
