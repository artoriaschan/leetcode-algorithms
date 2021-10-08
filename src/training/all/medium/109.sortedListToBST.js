/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-10-08 15:00:12
 * @LastEditTime: 2021-10-08 15:36:54
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/convert-sorted-list-to-binary-search-tree/
 */
import TreeNode from "../TreeNode";
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
function sortedListToBST(head) {
  return buildTree(head, null);
}

function buildTree(left, right) {
  if (left === right) {
    return null;
  }
  const mid = getMid(left, right);
  const root = new TreeNode(mid.val);
  root.left = buildTree(left, mid);
  root.right = buildTree(mid.next, right);
  return root;
}

function getMid(left, right) {
  let fast = left;
  let slow = left;

  while (fast !== right && fast.next !== right) {
    fast = fast.next;
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}
