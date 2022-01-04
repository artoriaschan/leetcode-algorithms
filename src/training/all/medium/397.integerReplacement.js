// https://leetcode-cn.com/problems/integer-replacement/
/**
 * @param {number} n
 * @return {number}
 */
// 枚举
function integerReplacement(n) {
  if (n === 1) {
    return 0;
  }
  if (n % 2 === 0) {
    return 1 + integerReplacement(Math.floor(n / 2));
  }
  return 2 + Math.min(integerReplacement(Math.floor(n / 2)), integerReplacement(Math.floor(n / 2) + 1));
}
// 记忆化搜索
const memo = new Map();
function integerReplacement1(n) {
  if (n === 1) {
    return 0;
  }
  if (!memo.has(n)) {
    if (n % 2 === 0) {
      memo.set(n, 1 + integerReplacement1(Math.floor(n / 2)));
    } else {
      memo.set(n, 2 + Math.min(integerReplacement1(Math.floor(n / 2)), integerReplacement1(Math.floor(n / 2) + 1)));
    }
  }
  return memo.get(n);
}
