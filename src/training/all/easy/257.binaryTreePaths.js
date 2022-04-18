function binaryTreePaths(root) {
  const res = [];
  dfs(root, [], res);
  return res;
}

function dfs(root, path, res) {
  if (!root) return;
  path.push(root.val);
  if (!root.left && !root.right) {
    res.push(path.join("->"));
    return;
  }
  dfs(root.left, path.slice(), res);
  dfs(root.right, path.slice(), res);
}
