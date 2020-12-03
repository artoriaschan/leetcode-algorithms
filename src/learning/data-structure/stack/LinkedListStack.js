class LinkedListNode {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedListStack {
  constructor() {
    this.top = null;
  }

  push(item) {
    const node = new LinkedListNode(item);
    node.next = this.top;
    this.top = node;
  }

  pop() {
    if (this.top === null) return null;
    const item = this.top.data;
    this.top = this.top.next;
    return item;
  }
}
// test
const stack = new LinkedListStack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
