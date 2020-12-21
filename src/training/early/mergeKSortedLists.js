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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  if (!l1 && !l2) return null;
  let list = null;
  let head = null;
  let hasHead = false;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      if (!hasHead) {
        list = new ListNode(l1.val);
        head = list;
        l1 = l1.next;
        hasHead = true;
        continue;
      }
      list.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      if (!hasHead) {
        list = new ListNode(l2.val);
        head = list;
        l2 = l2.next;
        hasHead = true;
        continue;
      }
      list.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    list = list.next;
  }
  if (l1) {
    if (!hasHead) {
      list = l1;
      head = list;
      hasHead = true;
      return head;
    }
    list.next = l1;
  }
  if (l2) {
    if (!hasHead) {
      list = l2;
      head = list;
      hasHead = true;
      return head;
    }
    list.next = l2;
  }
  return head;
};
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 *
 * 思路:
 *  分解成多个合并两个排序列表
 */
var mergeKLists = function(lists) {
  if (lists.length <= 0) return [];
  let head = lists[0];
  for (let i = 1; i < lists.length; i++) {
    if (!lists[i]) continue;
    head = mergeTwoLists(head, lists[i]);
  }
  return head === null ? [] : head;
};

let l1 = new ListNode(1);
l1.next = new ListNode(4);
l1.next.next = new ListNode(5);

let l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);

let l3 = new ListNode(2);
l3.next = new ListNode(6);

let lists = [];
lists.push(l1);
lists.push(l2);
lists.push(l3);

console.log(JSON.stringify(mergeKLists([])));
