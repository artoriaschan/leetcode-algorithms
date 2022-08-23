/**
 * @param {string[]} words
 * @return {number}
 */
// 长度短的字符串传入第一个参数
function isCanChain(s1, s2) {
  let c1 = 0;
  let c2 = 0;
  let wrong = 0;
  while (c1 < s1.length) {
    if (s1[c1] !== s2[c2]) {
      wrong += 1;
      if (wrong > 1) return false;
      c2 += 1;
    }
    if (s1[c1] === s2[c2]) {
      c1 += 1;
      c2 += 1;
    }
  }
  return true;
}
function longestStrChain(words) {
  const n = words.length;
  const memo = new Map();
  // 长度为 len 的字符串，只能和长度为 len - 1 的字符串形成链，将数组按字符串长度从小到大排序
  words.sort((a, b) => a.length - b.length);
  words.forEach((word, index) => {
    if (!memo.has(word.length)) memo.set(word.length, new Set());
    memo.get(word.length).add(index);
  });
  // dp[i] 以 word[i] 为结尾单词的最长词串长度
  const dp = new Array(n).fill(1);
  let res = 1;
  for (let i = 0; i < n; i++) {
    // 检测是否存在 length - 1 的字符串
    if (memo.has(words[i].length - 1)) {
      for (let index of memo.get(words[i].length - 1)) {
        if (isCanChain(words[index], words[i])) {
          dp[i] = Math.max(dp[i], dp[index] + 1);
        }
        res = Math.max(res, dp[i]);
      }
    }
  }

  return res;
}
