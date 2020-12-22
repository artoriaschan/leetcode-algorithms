/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
  const res = [];
  backtrack(res, "", 0, 0, n);
  return res;
}
// 回溯算法
function backtrack(res, cur, open, close, max) {
  if (cur.length === max * 2) {
    res.push(cur);
  }
  if (open < max) backtrack(res, cur + "(", open + 1, close, max);
  if (close < open) backtrack(res, cur + ")", open, close + 1, max);
}
