/* eslint-disable no-multi-assign */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 * 思路:
 *  递归
 */
// 创建新节点
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
// eslint-disable-next-line no-unused-vars
function mergeTrees(t1, t2) {
  let node = null;
  if (t1 && t2) {
    node = new TreeNode(t1.val + t2.val);
    node.left = mergeTrees(t1.left, t2.left);
    node.right = mergeTrees(t1.right, t2.right);
  } else if (t1) {
    node = new TreeNode(t1.val);
    node.left = mergeTrees(t1.left, null);
    node.right = mergeTrees(t1.right, null);
  } else if (t2) {
    node = new TreeNode(t2.val);
    node.left = mergeTrees(null, t2.left);
    node.right = mergeTrees(null, t2.right);
  }
  return node;
}
// 在t1上操作
// eslint-disable-next-line no-unused-vars
function mergeTrees2(t1, t2) {
  if (t1 === null) {
    return t2;
  }
  if (t2 === null) {
    return t1;
  }
  t1.val += t2.val;
  t1.left = mergeTrees(t1.left, t2.left);
  t1.right = mergeTrees(t1.right, t2.right);
  return t1;
}
