/**
 * @param {number} n
 * @return {string[]}
 */
// eslint-disable-next-line no-unused-vars
function findStrobogrammatic(n) {
  const mirrors = {
    "6": "9",
    "9": "6",
  };
  const selfMirrors = {
    "0": "0",
    "1": "1",
    "8": "8",
  };
  const ans = [];
  const len = n;
  function dfs(n, l, r) {
    if (n === 0) {
      // 左右拼凑起来并且加入vector
      ans.push(l + r);
      return;
    }
    if (n === 1) {
      for (let key in selfMirrors) {
        ans.push(l + key + r);
      }
      return;
    }
    for (let key in mirrors) {
      dfs(n - 2, l + key, mirrors[key] + r);
    }
    for (let key in selfMirrors) {
      if (n === len && key === "0") continue;
      dfs(n - 2, l + key, selfMirrors[key] + r);
    }
  }
  dfs(n, "", "");
  return ans;
}
