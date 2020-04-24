/**
 * @param {string} S
 * @return {number}
 * 思路:
 *  分组计算
 * 遍历字符串 S， 计算每个最长只含单一字母的连续子串的长度 count，每个最长连续子串可以分成 count * (count + 1) / 2 个不同的子串，将其累加到结果中。
 */
// eslint-disable-next-line no-unused-vars
function countLetters(S) {
  let ans = 0;
  let count = 1;
  for (let i = 1; i < S.length; i++) {
    if (S.charAt(i) === S.charAt(i - 1)) {
      count++;
    } else {
      ans += (count * (count + 1)) / 2;
      count = 1;
    }
  }
  ans += (count * (count + 1)) / 2;
  return ans;
}
