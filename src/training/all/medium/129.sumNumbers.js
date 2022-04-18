// https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/

function sumNumbers(root) {
  const res = [];
  dfs(root, "", res);
  return res.reduce((prev, cur) => +prev + +cur, 0);
}

function dfs(root, num, res) {
  if (!root) return;
  num += `${root.val}`;
  if (!root.left && !root.right) {
    res.push(num);
    return;
  }
  dfs(root.left, num, res);
  dfs(root.right, num, res);
}
