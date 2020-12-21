/**
 * @param {number} n
 * @return {string[]}
 * 思路
 *  带限制条件的全排列问题
 */
// eslint-disable-next-line no-unused-vars
function generateParenthesis(n) {
  let ans = [];
  let backtrack = (ans, cur, open, close, max) => {
    if (cur.length === max * 2) {
      ans.push(cur);
      return;
    }
    if (open < max) {
      backtrack(ans, cur + "(", open + 1, close, max);
    }
    if (close < open) {
      backtrack(ans, cur + ")", open, close + 1, max);
    }
  };
  backtrack(ans, "", 0, 0, n);
  return ans;
}
