/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-23 17:25:52
 * @LastEditTime: 2021-10-23 17:33:53
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/
 */
/**
 * @param {Node} root
 * @return {Node}
 */
function connect(root) {
  if (!root) return root;
  const stack = [root];
  while (stack.length) {
    const size = stack.length;
    let pre = null;
    for (let i = 0; i < size; i++) {
      const node = stack.shift();
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      if (pre) pre.next = node;
      pre = node;
      if (i === size - 1) node.next = null;
    }
  }
  return root;
}
