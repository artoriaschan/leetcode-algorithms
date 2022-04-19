// https://leetcode-cn.com/problems/maximum-binary-tree/
function constructMaximumBinaryTree(nums) {
  return build(nums, 0, nums.length - 1);
}

function build(nums, lo, hi) {
  if (lo > hi) return null;
  let index = -1;
  let maxValue = Number.MIN_SAFE_INTEGER;
  for (let i = lo; i <= hi; i++) {
    const num = nums[i];
    if (num > maxValue) {
      maxValue = num;
      index = i;
    }
  }
  const root = new TreeNode(maxValue);
  // 递归调用构造左右子树
  root.left = build(nums, lo, index - 1);
  root.right = build(nums, index + 1, hi);

  return root;
}
