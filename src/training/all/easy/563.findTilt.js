function findTilt(root) {
  let ans = 0;

  const dfs = node => {
    if (!node) {
      return 0;
    }
    const sumLeft = dfs(node.left);
    const sumRight = dfs(node.right);
    ans += Math.abs(sumLeft - sumRight);
    return sumLeft + sumRight + node.val;
  };

  dfs(root);
  return ans;
}
