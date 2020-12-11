const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

class MyPromise {
  constructor(fn) {
    this.state = PENDING;
    this.value = null;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  resolve(value) {
    if (this.state === PENDING) {
      this.state = RESOLVED;
      this.value = value;
      this.resolvedCallbacks.map(cb => cb(this.value));
    }
  }

  reject(value) {
    if (this.state === PENDING) {
      this.state = REJECTED;
      this.value = value;
      this.rejectedCallbacks.map(cb => cb(this.value));
    }
  }

  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === "function" ? onFulfilled : v => v;
    onRejected =
      typeof onRejected === "function"
        ? onRejected
        : r => {
            throw r;
          };
    if (this.state === PENDING) {
      this.resolvedCallbacks.push(onFulfilled);
      this.rejectedCallbacks.push(onRejected);
    }
    if (this.state === RESOLVED) {
      onFulfilled(this.value);
    }
    if (this.state === REJECTED) {
      onRejected(this.value);
    }
  }
}

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1);
  }, 1000);
}).then(value => {
  console.log(value);
});
