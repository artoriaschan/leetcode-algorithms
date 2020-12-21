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
 * https://leetcode-cn.com/problems/house-robber-iii/solution/tong-yong-si-lu-tuan-mie-da-jia-jie-she-wen-ti-b-2/
 * https://leetcode-cn.com/problems/house-robber-iii/solution/san-chong-fang-fa-jie-jue-shu-xing-dong-tai-gui-hu/
 * 思路:
 *  题解:
 *    首先要明确相邻的节点不能偷，也就是爷爷选择偷，儿子就不能偷了，但是孙子可以偷
 *    二叉树只有左右两个孩子，一个爷爷最多 2 个儿子，4 个孙子
 *  1. 递归: 4 个孙子偷的钱 + 爷爷的钱 VS 两个儿子偷的钱 哪个组合钱多，就当做当前节点能偷的最大钱数。这就是动态规划里面的最优子结构
 *  2. 记忆化: 递归时复杂度高, 因为重复计算儿子和孙子的偷钱总数, 可以将其缓存起来, 解决重复子问题
 *  3. 动态规划: 每个节点可选择偷或者不偷两种状态
 *      我们使用一个大小为 2 的数组来表示 int[] res = new int[2] 0 代表不偷，1 代表偷
 *        当前节点选择不偷：当前节点能偷到的最大钱数 = 左孩子能偷到的钱 + 右孩子能偷到的钱
 *        当前节点选择偷：当前节点能偷到的最大钱数 = 左孩子选择自己不偷时能得到的钱 + 右孩子选择不偷时能得到的钱 + 当前节点的钱数
 */
// eslint-disable-next-line no-unused-vars
function rob(root) {
  if (root === null) return 0;

  let money = root.val;
  if (root.left != null) {
    money += rob(root.left.left) + rob(root.left.right);
  }

  if (root.right != null) {
    money += rob(root.right.left) + rob(root.right.right);
  }

  return Math.max(money, rob(root.left) + rob(root.right));
}

// eslint-disable-next-line no-unused-vars
function rob1(root) {
  let memo = new WeakMap();
  function robInternal(root) {
    if (root == null) return 0;
    if (memo.has(root)) return memo.get(root);
    let money = root.val;

    if (root.left != null) {
      money += robInternal(root.left.left) + robInternal(root.left.right);
    }
    if (root.right != null) {
      money += robInternal(root.right.left) + robInternal(root.right.right);
    }
    let result = Math.max(money, robInternal(root.left) + robInternal(root.right));
    memo.set(root, result);
    return result;
  }
  return robInternal(root);
}
// eslint-disable-next-line no-unused-vars
function rob3(root) {
  function robInternal(root) {
    let result = new Array(2).fill(0);
    if (root === null) return result;
    let left = robInternal(root.left);
    let right = robInternal(root.right);

    result[0] = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
    result[1] = left[0] + right[0] + root.val;

    return result;
  }
  let result = robInternal(root);
  return Math.max(result[0], result[1]);
}
