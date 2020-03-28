/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 * 思路:
 *  递归: 通过前序遍历确认根节点, 从中序遍历中确认左右子树, 递归构建左右子树
 */
function TreeNode(val) {
  this.val = val;
  // eslint-disable-next-line no-multi-assign
  this.left = this.right = null;
}
// eslint-disable-next-line no-unused-vars
function buildTree(preorder, inorder) {
  let build = inorder => {
    if (!inorder || !inorder.length) return null;
    let tmp = preorder.shift();
    let mid = inorder.indexOf(tmp);
    let root = new TreeNode(tmp);
    root.left = build(inorder.slice(0, mid));
    root.right = build(inorder.slice(mid + 1));
    return root;
  };
  return build(inorder);
}
