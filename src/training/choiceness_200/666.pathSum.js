/**
 * @param {number[]} nums
 * @return {number}
 * 思路:
 *  恢复树, 遍历树
 */
function Node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}
// eslint-disable-next-line no-unused-vars
function pathSum(nums) {
  let ans = 0;
  function dfs(node, sum) {
    if (node === null) return;
    sum += node.val;
    if (node.left == null && node.right == null) {
      ans += sum;
    } else {
      dfs(node.left, sum);
      dfs(node.right, sum);
    }
  }
  let root = new Node(nums[0] % 10);
  for (let num of nums) {
    if (num === nums[0]) continue;
    let depth = num / 100;
    let pos = Math.floor(num / 10) % 10;
    let val = num % 10;
    pos--;
    let cur = root;
    for (let d = depth - 2; d >= 0; --d) {
      // 根据位置区分左右子树, 例如当d = 0时, 说明在第二层, 则 1 << d 为1, 则第二层的顺序为 0, 1
      if (pos < 1 << d) {
        if (cur.left == null) cur.left = new Node(val);
        cur = cur.left;
      } else {
        if (cur.right == null) cur.right = new Node(val);
        cur = cur.right;
      }
      // 缩小位置信息
      pos %= 1 << d;
    }
  }
  dfs(root, 0);
  return ans;
}
