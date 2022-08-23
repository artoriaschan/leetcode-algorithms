/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */

function calcDepth(root) {
  let h = 0;
  if (root.left) {
    h = Math.max(h, calcDepth(root.left) + 1);
  }
  if (root.right) {
    h = Math.max(h, calcDepth(root.right) + 1);
  }

  return h;
}

function dfs(res, root, r, c, height) {
  res[r][c] = root.val.toString();
  if (root.left) {
    dfs(res, root.left, r + 1, c - (1 << (height - r - 1)), height);
  }
  if (root.right) {
    dfs(res, root.right, r + 1, c + (1 << (height - r - 1)), height);
  }
}

function printTree(root) {
  const height = calcDepth(root);
  const m = height + 1;
  const n = (1 << (height + 1)) - 1;
  const res = new Array(m).fill(0).map(() => new Array(n).fill(""));
  dfs(res, root, 0, Math.floor((n - 1) / 2), height);
  return res;
}
