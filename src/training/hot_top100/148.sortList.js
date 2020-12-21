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
 * 在 O(n log n) 时间复杂度和常数级空间复杂度下，对链表进行排序。
 * 思路:
 *    归并排序(快慢指针):
 *      对数组做归并排序的空间复杂度为 O(n)，分别由新开辟数组O(n)O和递归函数调用O(logn)组成，而根据链表特性：
 *        数组额外空间：链表可以通过修改引用来更改节点顺序，无需像数组一样开辟额外空间；
 *        递归额外空间：递归调用函数将带来O(logn)的空间复杂度，因此若希望达到O(1)空间复杂度，则不能使用递归。
 *      算法实现有以下两个环节:
 *        分割cut环节: 找到中点断开
 *          我们使用 fast,slow 快慢双指针法，链表节点个数为奇数时找到中点，为偶数找到中心左边的节点。
 *        合并merge环节: 将两个排序链表合并，转化为一个排序链表。
 *          设置两指针 left, right 分别指向两链表头部，比较两指针处节点值大小，由小到大加入合并链表头部，指针交替前进，直至添加完两个链表。
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
// eslint-disable-next-line no-unused-vars
function sortList(head) {
  if (head === null || head.next === null) return head;
  let fast = head.next;
  let slow = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let tmp = slow.next;
  slow.next = null;
  let left = sortList(head);
  let right = sortList(tmp);
  let h = new ListNode(0);
  let ans = h;
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      h.next = left;
      left = left.next;
    } else {
      h.next = right;
      right = right.next;
    }
    h = h.next;
  }
  h.next = left != null ? left : right;
  return ans.next;
}
