/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(nums) {
  return helper(nums, 0, nums.length - 1);
}
function helper(nums, low, high) {
  if (low > high) {
    // low > high表示子数组为空
    return null;
  }
  // 以mid作为根节点
  const mid = Math.floor((high - low) / 2) + low;
  const root = new TreeNode(nums[mid]);
  // 左子数组[low, mid -1]构建左子树
  root.left = helper(nums, low, mid - 1);
  // 右子数组[mid + 1, high]构建右子树
  root.right = helper(nums, mid + 1, high);
  return root;
}
