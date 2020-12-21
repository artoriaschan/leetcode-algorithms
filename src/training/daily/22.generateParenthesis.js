/**
 * @param {number} n
 * @return {string[]}
 * 思路:
 *  暴力法
 *  回溯法
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
// 暴力法
// eslint-disable-next-line no-unused-vars
function generateParenthesis1(n) {
  let ans = [];
  let valid = current => {
    let balance = 0;
    for (let c of current) {
      if (c === "(") balance++;
      else balance--;
      if (balance < 0) return false;
    }
    return balance === 0;
  };
  let generateAll = (current, pos) => {
    if (current.length === n * 2) {
      if (valid(current)) ans.push(current);
    } else {
      current += "(";
      generateAll(current, pos + 1);
      current += ")";
      generateAll(current, pos + 1);
    }
  };
  generateAll("", 0);
  return ans;
}
