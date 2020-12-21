/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 * 思路:
 *  深度优先搜索:
 *    一条路径的长度为该路径经过的节点数减一，
 *    所以求直径（即求路径长度的最大值）等效于求路径经过节点数的最大值减一。
 *    记节点 node 为起点的路径经过节点数的最大值为 dnode:
 *      dnode = L + R + 1(左子树最大深度 + 右子树最大深度 + 根节点)
 */
// eslint-disable-next-line no-unused-vars
function diameterOfBinaryTree(root) {
  let ans = 1;
  function depth(node) {
    if (node === null) return 0;
    let L = depth(node.left);
    let R = depth(node.right);
    ans = Math.max(ans, L + R + 1);
    return Math.max(L, R) + 1;
  }
  depth(root);
  // ans一直存放的是路径经过的节点数, 所有最后返回直径得减去1
  return ans - 1;
}
