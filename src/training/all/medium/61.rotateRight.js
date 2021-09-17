/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-17 12:18:55
 * @LastEditTime: 2021-09-17 14:40:55
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/rotate-list/
 */
import ListNode from "../ListNode";
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function rotateRight(head, k) {
  if (k === 0 || !head || !head.next) return head;

  let node = head;
  let n = 1;
  while (node.next) {
    node = node.next;
    n++;
  }
  let add = n - (k % n);
  if (add === n) {
    return head;
  }
  node.next = head;
  for (let i = 0; i < add; i++) {
    node = node.next;
  }
  const ret = node.next;
  node.next = null;
  return ret;
}
