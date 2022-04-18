// https://leetcode-cn.com/problems/sum-of-left-leaves/

function sumOfLeftLeaves(root) {
  const res = [];
  dfs(root, false, res);
  return res.reduce((prev, cur) => prev + cur, 0);
}

function dfs(root, isLeftSubTree, res) {
  if (!root) return;
  if (isLeftSubTree && !root.left && !root.right) {
    res.push(root.val);
    return;
  }
  dfs(root.left, true, res);
  dfs(root.right, false, res);
}
