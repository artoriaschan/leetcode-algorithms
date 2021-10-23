/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-09 12:03:42
 * @LastEditTime: 2021-10-23 16:42:52
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
function minDepth(root) {
  let ans = 0;
  if (!root) return ans;
  const stack = [root];
  while (stack.length) {
    let hasLeaf = false;
    const size = stack.length;
    for (let i = 0; i < size; i++) {
      const node = stack.shift();
      if (node.left || node.right) {
        if (node.left) stack.push(node.left);
        if (node.right) stack.push(node.right);
        continue;
      }
      hasLeaf = true;
    }
    ans++;
    if (hasLeaf) break;
  }
  return ans;
}
