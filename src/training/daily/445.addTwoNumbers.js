/* eslint-disable */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 思路:
 *  栈
 *  大数处理BigInt
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
function addTwoNumbers(l1, l2) {
  if (l1 === null) return l2;
  if (l2 === null) return l1;
  let num1 = BigInt(0);
  let num2 = BigInt(0);
  while (l1 !== null) {
    num1 = num1 * BigInt(10) + BigInt(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    num2 = num2 * BigInt(10) + BigInt(l2.val);
    l2 = l2.next;
  }
  const sum = num1 + num2;
  const sumArr = sum.toString().split("");
  let head = new ListNode(null);
  const first = head;
  for (let i = 0; i < sumArr.length; i++) {
    head.val = parseInt(sumArr[i], 10);
    if (i !== sumArr.length - 1) {
      const node = new ListNode(null);
      head.next = node;
      head = head.next;
    }
  }

  return first;
}
