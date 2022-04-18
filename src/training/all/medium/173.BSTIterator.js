// https://leetcode-cn.com/problems/binary-search-tree-iterator/
class BSTIterator {
  stack = [];

  root = null;

  index = 0;

  constructor(root) {
    this.root = root;
    this.dfs(root);
  }

  next() {
    return this.stack[this.index++];
  }

  hasNext() {
    if (this.index >= this.stack.length) {
      return false;
    }
    return true;
  }

  dfs(root) {
    if (!root) return;
    this.dfs(root.left);
    this.stack.push(root.val);
    this.dfs(root.right);
  }
}
