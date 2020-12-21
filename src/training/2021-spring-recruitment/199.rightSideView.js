/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
function rightSideView(root) {
  if (!root) return [];
  let arr = [];
  dfs(root, 0, arr);
  return arr;
}
// 深度优先遍历
function dfs(root, depth, res) {
  if (root) {
    // 当数组长度等于当前 深度 时, 把当前的值加入数组
    if (res.length === depth) {
      res.push(root.val);
    }
    // 先从右边开始, 当右边没了, 再轮到左边
    dfs(root.right, depth + 1, res);
    dfs(root.left, depth + 1, res);
  }
}
// 广度优先遍历
function rightSideView1(root) {
  if (!root) return [];
  let res = [];
  const queue = [];
  const depth = [];
  queue.push(root);
  depth.push(0);
  while (queue.length > 0) {
    const node = queue.shift();
    const dep = depth.shift();
    if (res.length === dep) {
      res.push(node.val);
    }
    // 先放入右子树
    if (node.right) {
      queue.push(node.right);
      depth.push(dep + 1);
    }
    // 再放入左子树
    if (node.left) {
      queue.push(node.left);
      depth.push(dep + 1);
    }
  }
  return res;
}
