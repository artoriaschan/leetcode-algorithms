function ListNode(val) {
  this.val = val;
  this.next = null;
}
var addTwoNumbers = function(l1, l2) {
  let carryBit = 0;
  let resultChain = null;
  let sum = l1.val + l2.val;
  let bit = sum % 10;
  carryBit = parseInt(sum / 10);
  let startResultChain = (resultChain = new ListNode(bit));
  l1 = l1.next;
  l2 = l2.next;
  while (true) {
    if (!l1) break;
    let sum;
    if (!l2) {
      sum = l1.val + carryBit;
    } else {
      sum = l1.val + l2.val + carryBit;
      l2 = l2.next;
    }
    l1 = l1.next;
    let bit = sum % 10;
    carryBit = parseInt(sum / 10);
    resultChain.next = new ListNode(bit);
    resultChain = resultChain.next;
  }
  if (l2) {
    while (true) {
      if (!l2) break;
      let sum = l2.val + carryBit;
      let bit = sum % 10;
      carryBit = parseInt(sum / 10);
      resultChain.next = new ListNode(bit);
      resultChain = resultChain.next;
      l2 = l2.next;
    }
  }
  if (carryBit) {
    let bit = carryBit;
    resultChain.next = new ListNode(bit);
  }
  return startResultChain;
};

let l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);
l1.next.next.next = new ListNode(9);

let l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);
console.info(addTwoNumbers(l1, l2));
