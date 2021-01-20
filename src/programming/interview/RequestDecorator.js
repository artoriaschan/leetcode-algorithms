/**
 * 在开发中，我们可能会遇到一些对异步请求数做并发量限制的场景，
 * 比如说微信小程序的request并发最多为5个，又或者我们需要做一些批量处理的工作，
 * 可是我们又不想同时对服务器发出太多请求（可能会对服务器造成比较大的压力）。
 * 这个时候我们就可以对请求并发数进行限制，并且使用排队机制让请求有序的发送出去。
 *
 * 实现一个对请求并发数做限制的通用 Request 类
 * 对应真实场景是控制并发请求数，并且需要返回请求的结果，模拟浏览器的并发请求控制
 *
 */

class RequestDecorator {
  constructor(limit) {
    this.limit = limit || 5;
    this.currentConcurrent = 0;
    this.reqQueue = [];
  }

  async request(req) {
    if (this.currentConcurrent >= this.maxLimit) {
      await this.startBlocking();
    }
    try {
      this.currentConcurrent++;
      const result = await req();
      return Promise.resolve(result);
    } catch (err) {
      return Promise.reject(err);
    } finally {
      console.log("当前并发数:", this.currentConcurrent);
      this.currentConcurrent--;
      this.next();
    }
  }

  startBlocking() {
    let _resolve;
    let promise2 = new Promise((resolve, reject) => (_resolve = resolve));
    this.reqQueue.push(_resolve);
    return promise2;
  }

  next() {
    if (this.reqQueue.length <= 0) return;
    const _resolve = this.reqQueue.shift();
    _resolve();
  }
}

// demo
function wait(num, string) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${Date(Date.now())}${string}`);
    }, num * 1000);
  });
}

const instance = new RequestDecorator(2);
// 打印: xxx
console.log(`${Date(Date.now())} Starting`);

instance.request(() => wait(1, `第一个`)).then(res => console.log(res));
instance.request(() => wait(1, `第二个`)).then(res => console.log(res));
instance.request(() => wait(1, `第三个`)).then(res => console.log(res));
instance.request(() => wait(1, `第四个`)).then(res => console.log(res));
instance.request(() => wait(1, `第五个`)).then(res => console.log(res));
instance.request(() => wait(1, `第六个`)).then(res => console.log(res));
