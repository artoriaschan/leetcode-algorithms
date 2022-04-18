// https://leetcode-cn.com/problems/path-sum-iii/
function pathSum(root, targetSum) {
  if (!root) {
    return 0;
  }

  let ret = rootSum(root, targetSum);
  ret += pathSum(root.left, targetSum);
  ret += pathSum(root.right, targetSum);
  return ret;
}

function rootSum(root, targetSum) {
  let ret = 0;
  if (!root) {
    return ret;
  }
  const val = root.val;
  if (val === targetSum) {
    ret++;
  }
  ret += rootSum(root.left, targetSum - val);
  ret += rootSum(root.right, targetSum - val);
  return ret;
}
// 前缀和
function pathSum2(root, targetSum) {
  const prefix = new Map();
  prefix.set(0, 1);
  return dfs(root, prefix, 0, targetSum);
}

const dfs = (root, prefix, curr, targetSum) => {
  if (!root) {
    return 0;
  }

  let ret = 0;
  curr += root.val;

  ret = prefix.get(curr - targetSum) || 0;
  prefix.set(curr, (prefix.get(curr) || 0) + 1);
  ret += dfs(root.left, prefix, curr, targetSum);
  ret += dfs(root.right, prefix, curr, targetSum);
  prefix.set(curr, (prefix.get(curr) || 0) - 1);

  return ret;
};
