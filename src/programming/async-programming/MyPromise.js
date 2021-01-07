const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

class MyPromise {
  constructor(fn) {
    this.state = PENDING;
    this.value = null;
    this.reson = null;
    this.resolvedCallbacks = [];
    this.rejectedCallbacks = [];
    try {
      fn(this.resolve.bind(this), this.reject.bind(this));
    } catch (e) {
      this.reject(e);
    }
  }

  resolve(value) {
    if (this.state !== PENDING) return;
    this.state = RESOLVED;
    this.value = value;
    this.resolvedCallbacks.map(cb => cb(this.value));
    return new MyPromise(resolve => resolve(this.value));
  }

  reject(reason) {
    if (this.state !== PENDING) return;
    this.state = REJECTED;
    this.reason = reason;
    this.rejectedCallbacks.map(cb => cb(this.reason));
    return new MyPromise((_, reject) => reject(this.value));
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
      const promise = new MyPromise((resolve, reject) => {
        // 暂存到成功回调等待调用
        this.resolvedCallbacks.push(innerValue => {
          try {
            const value = onFulfilled(innerValue);
            MyPromise.doThenFunc(value, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
        // 暂存到失败回调等待调用
        this.rejectedCallbacks.push(innerValue => {
          try {
            const reason = onRejected(innerValue);
            MyPromise.doThenFunc(reason, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      });
      return promise;
    }
    const promise = new MyPromise((resolve, reject) => {
      try {
        const res =
          this.state === RESOLVED
            ? onFulfilled(this.value) // 成功状态调用 onFulfilled
            : onRejected(this.value); // 失败状态调用 onRejected
        MyPromise.doThenFunc(res, resolve, reject);
      } catch (error) {
        reject(error);
      }
    });
    return promise;
  }

  static doThenFunc(value, resolve, reject) {
    if (value instanceof MyPromise) {
      value.then(
        val => {
          MyPromise.doThenFunc(val, resolve, reject);
        },
        reason => {
          reject(reason);
        }
      );
      return;
    }
    resolve(value);
  }
}

new MyPromise((resolve, reject) => {
  console.log("fn");
  setTimeout(() => {
    resolve(1);
  }, 1000);
})
  .then(value => {
    console.log(value);
    return value + 1;
  })
  .then(value => {
    console.log(value);
    return value + 1;
  })
  .then(value => {
    console.log(value);
    return new MyPromise(resolve => resolve(value + 1));
  })
  .then(value => {
    console.log(value);
  });
