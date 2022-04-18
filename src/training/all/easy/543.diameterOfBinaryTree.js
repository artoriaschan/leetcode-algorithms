function diameterOfBinaryTree(root) {
  let ans = 0;
  function depth(root) {
    if (!root) {
      return 0;
    }
    let L = depth(root.left);
    let R = depth(root.right);
    ans = Math.max(ans, L + R);
    return Math.max(L, R) + 1;
  }
  depth(root);
  return ans;
}
