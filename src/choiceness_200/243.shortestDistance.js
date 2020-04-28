/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function shortestDistance(words, word1, word2) {
  let dis = words.length;
  let a = -1;
  let b = -1;
  for (let i = 0; i < words.length; i++) {
    if (words[i] === word1) {
      a = i;
    } else if (words[i] === word2) {
      b = i;
    }
    if (a !== -1 && b !== -1) {
      dis = Math.min(dis, Math.abs(a - b));
    }
  }
  return dis;
}
