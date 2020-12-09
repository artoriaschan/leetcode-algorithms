/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// 二叉搜索树查找第K大的元素，需要右 -> 中 -> 左遍历
let curK;
let res;
function kthLargest(root, k) {
  curK = k;
  dfs(root);
  return res;
}

function dfs(root) {
  if (root === null) return;
  dfs(root.right);
  if (curK === 0) return;
  curK--;
  if (curK === 0) {
    res = root.val;
  }
  dfs(root.left);
}

// 关于求一颗普通树的第K大元素：
// 遍历树，使用小顶堆来进行存储，堆大小为K，堆顶元素为第K大的元素。
