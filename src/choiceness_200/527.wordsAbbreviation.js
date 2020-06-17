/**
 * @param {string[]} dict
 * @return {string[]}
 * 思路:
 *  贪心
 *  分组 + 最短公共前缀
 */
function abbrev(word, i) {
  let len = word.length;
  if (len - i <= 3) return word;
  return word.substring(0, i + 1) + (len - i - 2) + word.charAt(len - 1);
}
// eslint-disable-next-line no-unused-vars
function wordsAbbreviation(dict) {
  let len = dict.length;
  const ans = new Array(len).fill("");
  const prefix = new Array(len).fill(0);
  for (let i = 0; i < len; ++i) {
    ans[i] = abbrev(dict[i], 0);
  }
  for (let i = 0; i < len; ++i) {
    while (true) {
      const dupes = new Set();
      for (let j = i + 1; j < len; ++j) {
        if (ans[i] === ans[j]) dupes.add(j);
      }

      if (!dupes.size) break;
      dupes.add(i);
      for (let k of dupes) {
        ans[k] = abbrev(dict[k], ++prefix[k]);
      }
    }
  }

  return ans;
}
