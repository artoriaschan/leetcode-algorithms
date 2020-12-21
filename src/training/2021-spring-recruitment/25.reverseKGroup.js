/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
  let cur = head;
  let count = 0;
  // 求k个待反转元素的首节点和尾节点
  while (cur != null && count !== k) {
    cur = cur.next;
    count++;
  }
  // 足够k个节点，去反转
  if (count === k) {
    // 递归链接后续k个反转的链表头节点
    cur = reverseKGroup(cur, k);
    while (count !== 0) {
      count--;
      // 反转链表
      let tmp = head.next;
      head.next = cur;
      cur = head;
      head = tmp;
    }
    head = cur;
  }
  return head;
}
