/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-28 17:18:49
 * @LastEditTime: 2021-09-28 17:21:31
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/reverse-linked-list/
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
}
