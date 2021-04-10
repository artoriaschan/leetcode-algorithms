const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    try{
      executor(this.resolve,this.reject)
    }catch(error){
      this.reject(error)
    }
  }

  status = PENDING

  value = null

  reson = null

  onFulfilledCallbacks = []

  onRejectedCallbacks = []

  resolve = (value)=> {
    if(this.status === PENDING) {
      this.status = FULFILLED
      this.value = value
      // 执行缓存的回调函数
      while(this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(value)
      }
    }
  }
  
  reject = (reson)=>{
    if(this.status === PENDING) {
      this.status = REJECTED
      this.reson = reson
      // 执行缓存的回调函数
      while(this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(reson)
      }
    }
  }

  then(onFulfilled, onRejected){
    const realOnFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value
    const realOnRejected = typeof onRejected === 'function' ? onRejected : reason => {throw reason}

    const next = new MyPromise((resolve, reject)=>{
      const fulfilledMicrotask = () => {
        queueMicrotask(()=>{
          // then 执行的时错误捕获
          try {
            const value = realOnFulfilled(this.value)
            resolvePromise(next, value, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      const rejectedMicrotask = () => {
        queueMicrotask(() => {
          try {
            // 调用失败回调，并且把原因返回
            const reson = realOnRejected(this.reson)
            // 传入 resolvePromise 集中处理
            resolvePromise(next, reson, resolve, reject)
          } catch (error) {
            reject(error)
          }
        })
      }
      if(this.status === FULFILLED) {
        fulfilledMicrotask()
      }else if(this.status === REJECTED) {
        rejectedMicrotask()
      }else if (this.status === PENDING) {
        // PENDING状态时缓存
        this.onFulfilledCallbacks.push(fulfilledMicrotask)
        this.onRejectedCallbacks.push(rejectedMicrotask)
      }
    })
    return next
  }

  // resolve 静态方法
  static resolve(parameter) {
    // 如果传入 MyPromise 就直接返回
    if (parameter instanceof MyPromise) {
      return parameter;
    }
    // 转成常规方式
    return new MyPromise(resolve =>  {
      resolve(parameter);
    });
  }

  // reject 静态方法
  static reject (reason) {
    return new MyPromise((resolve, reject) => {
      reject(reason);
    });
  }
}

function resolvePromise(promise, x, resolve, reject) {
  // 解决循环调用的问题
  if (promise === x) {
    return reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
  }
  if (typeof x === 'object' || typeof x === 'function') {
    // x 为 null 直接返回，走后面的逻辑会报错
    if (x === null) {
      return resolve(x);
    }

    let then;
    try {
      // 把 x.then 赋值给 then 
      then = x.then;
    } catch (error) {
      return reject(error);
    }

    // 如果 then 是函数
    if (typeof then === 'function') {
      let called = false;
      try {
        then.call(
          x, // this 指向 x
          // 如果 resolvePromise 以值 y 为参数被调用，则运行 [[Resolve]](promise, y)
          y => {
            // 如果 resolvePromise 和 rejectPromise 均被调用，
            // 或者被同一参数调用了多次，则优先采用首次调用并忽略剩下的调用
            // 实现这条需要前面加一个变量 called
            if (called) return;
            called = true;
            resolvePromise(promise, y, resolve, reject);
          },
          // 如果 rejectPromise 以据因 r 为参数被调用，则以据因 r 拒绝 promise
          r => {
            if (called) return;
            called = true;
            reject(r);
          });
      } catch (error) {
        // 如果 resolvePromise 或 rejectPromise 已经被调用，直接返回
        if (called) return;
        reject(error);
      }
    } else {
      // 如果 then 不是函数，以 x 为参数执行 promise
      resolve(x);
    }
  } else {
    // 如果 x 不为对象或者函数，以 x 为参数执行 promise
    resolve(x);
  }
}

// ========================test=========================
MyPromise.resolve().then(() => {
  console.log(0);
  return MyPromise.resolve(4);
}).then((res) => {
  console.log(res)
})

MyPromise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})

module.exports = MyPromise