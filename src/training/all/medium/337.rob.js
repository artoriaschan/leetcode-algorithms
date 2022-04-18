// https://leetcode-cn.com/problems/house-robber-iii/
const memo = new WeakMap();
function rob(root) {
  if (!root) return 0;
  if (memo.has(root)) {
    return memo.get(root);
  }
  const doIt =
    root.val +
    (root.left === null ? 0 : rob(root.left.left) + rob(root.left.right)) +
    (root.right == null ? 0 : rob(root.right.left) + rob(root.right.right));
  const notDoIt = rob(root.left) + rob(root.right);

  const res = Math.max(doIt, notDoIt);
  memo.set(root, res);
  return res;
}

function rob2(root) {
  const res = dp(root);
  return Math.max(res[0], res[1]);
}

function dp(root) {
  if (!root) {
    return [0, 0];
  }
  const left = dp(root.left);
  const right = dp(root.right);

  const notRob = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
  const rob = root.val + left[0] + right[0];

  return [notRob, rob];
}
