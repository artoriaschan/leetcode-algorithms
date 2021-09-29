/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-29 17:54:07
 * @LastEditTime: 2021-09-29 20:07:26
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/recover-binary-search-tree/
 */
const inorder = (root, nums) => {
  if (root === null) {
    return;
  }
  inorder(root.left, nums);
  nums.push(root.val);
  inorder(root.right, nums);
};

const findTwoSwapped = nums => {
  const n = nums.length;
  let index1 = -1;
  let index2 = -1;
  for (let i = 0; i < n - 1; ++i) {
    if (nums[i + 1] < nums[i]) {
      index2 = i + 1;
      if (index1 === -1) {
        index1 = i;
      } else {
        break;
      }
    }
  }
  let x = nums[index1];
  let y = nums[index2];
  return [x, y];
};

const recover = (r, count, x, y) => {
  if (r !== null) {
    if (r.val === x || r.val === y) {
      r.val = r.val === x ? y : x;
      if (--count === 0) {
        return;
      }
    }
    recover(r.left, count, x, y);
    recover(r.right, count, x, y);
  }
};

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var recoverTree = function(root) {
  const nums = [];
  // 中序排列
  inorder(root, nums);
  // 找被交换的节点
  const [first, second] = findTwoSwapped(nums);
  // 还原两个节点
  recover(root, 2, first, second);
};
