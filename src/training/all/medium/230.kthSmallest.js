// https://leetcode-cn.com/problems/kth-smallest-element-in-a-bst/

function kthSmallest(root, k) {
  const res = [];
  dfs(root, res);
  return res[k - 1];
}

function dfs(root, res) {
  if (!root) return;
  dfs(root.left, res);
  res.push(root.val);
  dfs(root.right, res);
}
// 循环遍历二叉树，使用栈
function kthSmallest1(root, k) {
  const stack = [];
  while (root != null || stack.length) {
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    root = stack.pop();
    --k;
    if (k === 0) {
      break;
    }
    root = root.right;
  }
  return root.val;
}
