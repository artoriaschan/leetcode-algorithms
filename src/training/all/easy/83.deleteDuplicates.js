/*
 * @Author: beiluo1@xiaohongshu.com
 * @Date: 2021-09-24 19:49:14
 * @LastEditTime: 2021-09-24 19:52:53
 * @LastEditors: beiluo1@xiaohongshu.com
 * @Description: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-list/submissions/
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteDuplicates(head) {
  if (!head) {
    return head;
  }

  let cur = head;
  while (cur.next) {
    if (cur.val === cur.next.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }

  return head;
}
