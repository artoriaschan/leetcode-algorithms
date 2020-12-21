/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
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
 * 思路:
 *  标记:
 *    先遍历A, 将A节点打上标记
 *    遍历B时判断有无标记, 返回第一个有标记的节点的值
 *  双指针:
 *    双指针法。初始化两个指针pA和pB分别指向headA和headB，每次pA和pB各走一步，
 *    当pA触底后变轨到headB，同理，当pB触底后变轨到headA。
 *    这样就只需遍历（A的非公共部分+B的非公共部分+AB的公共部分）。
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function getIntersectionNode(headA, headB) {
  while (headA) {
    headA.sep = 1;
    headA = headA.next;
  }
  while (headB) {
    if (headB.sep) return headB;
    headB = headB.next;
  }
}
function getIntersectionNode1(headA, headB) {
  let pA = headA;
  let pB = headB;
  while (pA !== pB) {
    pB = pB ? pB.next : headA;
    pA = pA ? pA.next : headB;
  }
  return pA;
}
