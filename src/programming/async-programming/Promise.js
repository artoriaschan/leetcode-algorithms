/* eslint-disable no-new */
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

// new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(1);
//   }, 1000);
// }).then(value => {
//   console.log(value);
// });
// eslint-disable-next-line no-new
new Promise(function(resolve, reject) {
  resolve(1);
  resolve(2);
})
  .then(function(res) {
    console.log(res);
    return 3;
  })
  .then(function(res) {
    console.log(res);
  });

// 宏任务队列和微任务队列
setTimeout(() => {
  console.log(1);
  new Promise(function(resolve) {
    resolve(2);
  }).then(res => {
    console.log(res);
    new Promise(function(resolve) {
      resolve(3);
    }).then(res => console.log(res));
  });
  setTimeout(() => {
    console.log(4);
  }, 0);
}, 0);
