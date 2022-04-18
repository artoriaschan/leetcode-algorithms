// https://leetcode-cn.com/problems/path-sum-iii/

function pathSum(root, targetSum) {
  if (root == null) {
    return 0;
  }

  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
}

function rootSum(root, targetSum) {
  let ret = 0;

  if (root == null) {
    return 0;
  }
  const val = root.val;
  if (val === targetSum) {
    ret++;
  }

  ret += rootSum(root.left, targetSum - val);
  ret += rootSum(root.right, targetSum - val);
  return ret;
}

function pathSum2(root, targetSum, flag = false) {
  return root
    ? pathSum(root.left, targetSum - root.val) +
        pathSum(root.right, targetSum - root.val) +
        (flag ? pathSum(root.left, targetSum, true) + pathSum(root.right, targetSum, true) : 0) +
        (targetSum === root.val ? 1 : 0)
    : 0;
}
