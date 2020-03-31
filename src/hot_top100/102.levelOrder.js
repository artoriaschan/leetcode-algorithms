/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 * 思路:
 *  BFS:
 *    递归:传递每层的层数
 *    迭代: 使用队列存储一层的节点
 */
// eslint-disable-next-line no-unused-vars
function levelOrder(root) {
  let ans = [];
  if (!root) return ans;
  function helper(node, level) {
    if (ans.length === level) {
      ans.push([]);
    }
    ans[level].push(node.val);
    if (node.left !== null) {
      helper(node.left, level + 1);
    }
    if (node.right !== null) {
      helper(node.right, level + 1);
    }
  }
  helper(root, 0);
  return ans;
}
// eslint-disable-next-line no-unused-vars
function levelOrder1(root) {
  let ans = [];
  if (!root) return ans;
  let queue = [];
  queue.push(root);
  let level = 0;
  while (queue.length) {
    ans.push([]);
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      ans[level].push(node.val);
      if (node.left !== null) queue.push(node.left);
      if (node.right !== null) queue.push(node.right);
    }
    level++;
  }
  return ans;
}
