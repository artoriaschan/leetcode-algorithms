// https://leetcode-cn.com/problems/binary-tree-preorder-traversal/
function preorderTraversal(root) {
  const res = [];
  dfs(root, res);
  return res;
}

function dfs(root, res) {
  if (!root) return;
  res.push(root.val);
  dfs(root.left, res);
  dfs(root.right, res);
}
