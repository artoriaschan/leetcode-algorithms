/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-29 15:33:38
 * @LastEditTime: 2021-09-29 15:49:11
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/validate-binary-search-tree/
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
function isValidBST(root) {
  return helper(root, -Infinity, Infinity);
}

function helper(root, lower, upper) {
  if (!root) return true;
  if (root.val <= lower || root.val >= upper) {
    return false;
  }
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
