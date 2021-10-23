/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-23 16:52:45
 * @LastEditTime: 2021-10-23 17:04:47
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/path-sum-ii/
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number[][]}
 */
function pathSum(root, targetSum) {
  const ans = [];
  backtrack(root, targetSum, ans, []);
  return ans;
}

function backtrack(root, targetSum, arr, temp) {
  if (!root) return;
  if (targetSum === root.val) {
    if (!root.left && !root.right) {
      temp.push(root.val);
      arr.push(temp);
      return;
    }
  }

  temp.push(root.val);
  backtrack(root.left, targetSum - root.val, arr, temp.slice());
  backtrack(root.right, targetSum - root.val, arr, temp.slice());
  temp.pop();
}
