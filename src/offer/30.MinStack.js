class MinStack {
  constructor() {
    this.stack = [];
    this.minItem = Infinity;
  }

  push(value) {
    if (this.minItem >= value) {
      this.stack.push(this.minItem);
      this.minItem = value;
    }
    this.stack.push(value);
  }

  pop() {
    const item = this.stack.pop();
    if (item === this.minItem) {
      this.minItem = this.stack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  min() {
    return this.minItem;
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.min();
minStack.pop();
minStack.top();
minStack.min();
