/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 双指针链表循环
// 遍历 2 个链表，无论哪个指针到尾部时，让其重新回到对方的头部
// 最终会在第一个公共节点相遇，如果没有，则会在 null 处相遇
var getIntersectionNode = function(headA, headB) {
  let curA = headA;
  let curB = headB;

  while (curA !== curB) {
    curA = curA != null ? curA.next : headB;
    curB = curB != null ? curB.next : headA;
  }
  return curA;
};
