/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 * 思路:
 *  转成数组, 使用双指针
 */
// eslint-disable-next-line no-unused-vars
function isPalindrome(head) {
  if (!head) return true;
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  let first = 0;
  let last = arr.length - 1;
  while (first < last) {
    if (arr[first] !== arr[last]) {
      return false;
    }
    first++;
    last--;
  }
  return true;
}
