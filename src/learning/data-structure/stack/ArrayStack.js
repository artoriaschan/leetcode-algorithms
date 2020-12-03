class ArrayStack {
  constructor() {
    this.content = [];
  }

  push(item) {
    this.content.push(item);
  }

  pop() {
    const item = this.content.pop();
    return item;
  }
}

// test
const stack = new ArrayStack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
