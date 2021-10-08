/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-08 14:15:08
 * @LastEditTime: 2021-10-08 14:35:14
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/binary-tree-zigzag-level-order-traversal/
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
function zigzagLevelOrder(root) {
  const ans = [];
  if (!root) return ans;
  const stack = [root];
  let isOrderLeft = true;
  while (stack.length > 0) {
    let levelList = [];
    const size = stack.length;
    for (let i = 0; i < size; ++i) {
      const node = stack.shift();
      if (isOrderLeft) {
        levelList.push(node.val);
      } else {
        levelList.unshift(node.val);
      }
      if (node.left !== null) {
        stack.push(node.left);
      }
      if (node.right !== null) {
        stack.push(node.right);
      }
    }
    ans.push(levelList);
    isOrderLeft = !isOrderLeft;
  }
  return ans;
}
