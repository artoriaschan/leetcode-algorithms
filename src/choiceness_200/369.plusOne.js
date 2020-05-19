/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 思路:
 *  哨兵头结点
 */
// eslint-disable-next-line no-unused-vars
function plusOne(head) {
  let num = BigInt(0);
  while (head) {
    num = BigInt(head.val) + num * BigInt(10);
    head = head.next;
  }
  num += BigInt(1);
  const numArr = num
    .toString()
    .split("")
    .map(a => parseInt(a, 10));
  const newHead = new ListNode(numArr[0]);
  let first = newHead;
  for (let i = 1; i < numArr.length; i++) {
    const node = new ListNode(numArr[i]);
    first.next = node;
    first = first.next;
  }
  return newHead;
}
// eslint-disable-next-line no-unused-vars
function plusOne1(head) {
  // sentinel head
  const sentinel = new ListNode(0);
  sentinel.next = head;
  let notNine = sentinel;

  // find the rightmost not-nine digit
  while (head !== null) {
    if (head.val !== 9) notNine = head;
    head = head.next;
  }

  // increase this rightmost not-nine digit by 1
  notNine.val++;
  notNine = notNine.next;

  // set all the following nines to zeros
  while (notNine != null) {
    notNine.val = 0;
    notNine = notNine.next;
  }

  return sentinel.val !== 0 ? sentinel : sentinel.next;
}
