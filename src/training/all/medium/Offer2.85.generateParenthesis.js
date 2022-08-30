/**
 * @param {number} n
 * @return {string[]}
 */

function dfs(left, right, output, res) {
  if (left > right || left < 0 || right < 0) return;
  if (left === 0 && right === 0) {
    res.push(output);
    return;
  }
  dfs(left - 1, right, output + "(", res);
  dfs(left, right - 1, output + ")", res);
}

function generateParenthesis(n) {
  const res = [];
  dfs(n, n, "", res);
  return res;
}
