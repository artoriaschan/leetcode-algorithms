/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
思路:
  递归:
    临界条件：最近公共祖先为根节点
      根节点是空节点
      根节点是q节点
      根节点是p节点
    根据临界条件
      此题相当于查找以 root 为根节点的树上是否有p节点或者q节点
        有，返回p节点或q节点
        无，返回null
    求解
      从左右子树分别进行递归，即查找左右子树上是否有p节点或者q节点
        左右子树均无p节点或q节点
        左子树找到，右子树没有找到，返回左子树的查找结果
        右子树找到，左子树没有找到，返回右子树的查找结果
        左、右子树均能找到
          说明此时的p节点和q节点在当前root节点两侧，返回root节点
 */
// eslint-disable-next-line no-unused-vars
function lowestCommonAncestor(root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left != null && right != null) {
    return root;
  }
  return left != null ? left : right;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
思路:
  递归
  算法:
    1.从根节点开始遍历树。
    2.如果当前节点本身是 p 或 q 中的一个，我们会将变量 mid 标记为 true，并继续搜索左右分支中的另一个节点。
    3.如果左分支或右分支中的任何一个返回 true，则表示在下面找到了两个节点中的一个。
    4.如果在遍历的任何点上，左、右或中三个标志中的任意两个变为 true，这意味着我们找到了节点 p 和 q 的最近公共祖先。
 */
// eslint-disable-next-line no-unused-vars
function lowestCommonAncestor1(root, p, q) {
  let ans = null;
  function recurseTree(currentNode, p, q) {
    if (currentNode == null) {
      return false;
    }
    let left = recurseTree(currentNode.left, p, q) ? 1 : 0;
    let right = recurseTree(currentNode.right, p, q) ? 1 : 0;
    let mid = currentNode === p || currentNode === q ? 1 : 0;
    if (mid + left + right >= 2) {
      ans = currentNode;
    }
    return mid + left + right > 0;
  }
  recurseTree(root, p, q);
  return ans;
}
