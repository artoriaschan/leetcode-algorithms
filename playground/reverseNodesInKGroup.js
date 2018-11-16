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

function debug(obj) {
    console.log(JSON.stringify(obj))
}

function statisticalLength(head){
    let length = 0
    while(head) {
        length ++
        head = head.next
    }
    return length
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    if(statisticalLength(head) < k) return head
    head = reverseList(head)
};

var reverseList =  function (list){
    var p=list.head,q=null;
    while(p.next!==null){
        q=p.next;
        p.next=q.next;
        q.next=list.head.next;
        list.head.next=q;
    }
    return list;
}

let list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)
list.next.next.next.next = new ListNode(5)

reverseKGroup(list)