/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 * 思路:
 *  Floyd算法, 分为两步
 *    1. 使用快慢指针判断是否有环, 如果有, 则返回相遇的节点
 *    2. 使用双指针, 一个从head, 一个从相遇节点开始遍历, 再次相遇的点为环的开始点
 */
// eslint-disable-next-line no-unused-vars
function detectCycle(head) {
  function getIntersect(head) {
    let fast = head;
    let slow = head;
    while (fast) {
      fast = fast.next;
      slow = slow.next;
      if (fast) fast = fast.next;
      else break;
      if (fast === slow) {
        return fast;
      }
    }
    return null;
  }
  if (head === null) {
    return null;
  }
  let intersect = getIntersect(head);
  if (intersect == null) {
    return null;
  }
  let ptr1 = head;
  let ptr2 = intersect;
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }

  return ptr1;
}
