/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 * 思路:
 *  hash
 *  双指针
 */
// eslint-disable-next-line no-unused-vars
function shortestWordDistance(words, word1, word2) {
  let map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (map.has(words[i])) {
      let curr = map.get(words[i]);
      curr.push(i);
      map.set(words[i], curr);
    } else {
      map.set(words[i], [i]);
    }
  }
  let minDistance = Infinity;
  const indexArr1 = map.get(word1);
  const indexArr2 = map.get(word2);
  for (let i = 0; i < indexArr1.length; i++) {
    for (let j = 0; j < indexArr2.length; j++) {
      let currDistance = Math.abs(indexArr1[i] - indexArr2[j]);
      if (currDistance > 0) minDistance = Math.min(currDistance, minDistance);
    }
  }
  return minDistance;
}
