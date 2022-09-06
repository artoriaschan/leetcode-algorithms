/**
 * @param {string} s
 * @return {number}
 */
// 分别计算每个字符的贡献
// 只需对每个字符，计算有多少子字符串仅包含该字符一次即可。
function uniqueLetterString(s) {
  const index = new Map();
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!index.has(c)) {
      index.set(c, []);
      index.get(c).push(-1);
    }
    index.get(c).push(i);
  }
  let res = 0;
  for (const [_, arr] of index.entries()) {
    arr.push(s.length);
    for (let i = 1; i < arr.length - 1; i++) {
      // 记同字符上一次出现的位置为 c_j ，下一次出现的位置为 c_k ，那么这样的子字符串就一共有 (c_i - c_j) * (c_k - c_i) 种
      // 这相当于两种方案的拼接：在字符串A（j, i]当中，字符i贡献的次数是（c_i - c_j）次。在字符串B [i, k) 当中，字符i贡献的次数是（c_k - c_i）。
      // 那么当两者拼接的时候，字符i对子串（j, k）的贡献就是两种方案的乘积（符合乘法公式）。
      res += (arr[i] - arr[i - 1]) * (arr[i + 1] - arr[i]);
    }
  }
  return res;
}
