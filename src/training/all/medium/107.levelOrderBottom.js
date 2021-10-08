/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-08 14:50:58
 * @LastEditTime: 2021-10-08 14:59:40
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function levelOrderBottom(root) {
  const ans = [];
  if (!root) return ans;
  const stack = [root];
  while (stack.length > 0) {
    const list = [];
    const size = stack.length;
    for (let i = 0; i < size; i++) {
      const node = stack.shift();
      list.push(node.val);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
    ans.unshift(list);
  }
  return ans;
}
