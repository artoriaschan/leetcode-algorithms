/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @param {number} target
 * @return {boolean}
 * 思路:
 *  中序遍历 + 双指针查询
 */
// eslint-disable-next-line no-unused-vars
function twoSumBSTs(root1, root2, target) {
  function inorder(node, ans) {
    if (node === null) return;
    inorder(node.left, ans);
    ans.push(node.val);
    inorder(node.right, ans);
  }
  let inorderArr1 = [];
  let inorderArr2 = [];
  inorder(root1, inorderArr1);
  inorder(root2, inorderArr2);
  let first = 0;
  let end = inorderArr2.length - 1;
  while (first < inorderArr1.length && end >= 0) {
    let sum = inorderArr1[first] + inorderArr2[end];
    if (sum === target) {
      return true;
    }
    if (sum < target) first++;
    else end--;
  }
  return false;
}
