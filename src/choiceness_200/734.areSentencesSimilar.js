/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string[][]} pairs
 * @return {boolean}
 * 思路:
 *  hash映射
 */
// eslint-disable-next-line no-unused-vars
function areSentencesSimilar(words1, words2, pairs) {
  if (words1.length !== words2.length) return false;
  if (pairs.length === 0) return true;
  let hash = {};
  words1.forEach(ele => {
    if (!hash[ele]) hash[ele] = [ele];
    else hash[ele].push(ele);
  });
  words2.forEach(ele => {
    if (!hash[ele]) hash[ele] = [ele];
    else hash[ele].push(ele);
  });
  pairs.forEach(ele => {
    if (!hash[ele[1]]) hash[ele[1]] = [ele[1]];
    if (!hash[ele[0]]) hash[ele[0]] = [ele[0]];
    hash[ele[1]].push(ele[0]);
    hash[ele[0]].push(ele[1]);
  });
  for (let i = 0; i < words1.length; i++) {
    if (!hash[words1[i]] && hash[words1[i]] !== 0) return false;
    if (hash[words1[i]].indexOf(words2[i]) === -1) return false;
  }
  return true;
}
