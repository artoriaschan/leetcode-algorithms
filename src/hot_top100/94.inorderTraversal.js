/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * 思路:
 *  递归
 *  迭代
 */
// 递归实现
// function inorderTraversal(root) {
//   const ans = [];
//   let traversal = root => {
//     if (!root) return;
//     traversal(root.left);
//     ans.push(root.val);
//     traversal(root.right);
//   };
//   traversal(root);
//   return ans;
// }
// 迭代实现
// eslint-disable-next-line no-unused-vars
function inorderTraversal(root) {
  const ans = [];
  const stack = [];
  let curr = root;
  while (curr || stack.length !== 0) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    ans.push(curr.val);
    curr = curr.right;
  }
  return ans;
}
