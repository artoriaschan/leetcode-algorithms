function request(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "/c?id=3") {
        reject(url);
      } else {
        resolve(url);
      }
    }, 1000);
  });
}

// function maxRequests(maxNumbers, queues) {
//   let length = queues.length;
//   let reqList = []; // 临时存储已请求的promise请求个数
//   let dataList = []; // 存储每个promise请求
//   function next() {
//     if (queues.length <= 0) return Promise.resolve();
//     let [path] = queues.splice(0, 1);
//     console.log(path, "开始");
//     let req = Promise.resolve(request(path));
//     dataList.push(req);
//     // 用于存储临时得请求的promise
//     let reqs = req.then(() => {
//       // 当执行完毕时会调用 该方法将请求从reqList中删除
//       reqList.splice(0, 1);
//       console.log(path, "结束");
//     });
//     reqList.push(reqs);
//     // 实现next可以继续调用 提供默认值
//     let r = Promise.resolve();
//     // 当reqList.length 大于规定时 使用Promise的方法race删除第一个执行完毕的请求
//     if (reqList.length >= maxNumbers) {
//       // 也就是说删除对应得请求
//       r = Promise.race(reqList);
//     }
//     // 继续向下调用
//     return r.then(() => next());
//   }

//   // 执行next 返回一个promise 通过Promise.all 执行dataList
//   return next().then(() => Promise.allSettled(dataList));
// }
function maxRequests(maxNumbers, queues) {
  const reqslist = [];
  const datalist = [];
  function next() {
    if (queues.length <= 0) return Promise.resolve();
    const [path] = queues.splice(0, 1);
    const req = request(path);
    console.log("开始：", path);
    datalist.push(req);
    const reqs = req
      .then(res => {
        reqslist.splice(0, 1);
        console.log("结束：", res);
      })
      .catch(err => {
        reqslist.splice(0, 1);
        console.log("结束：", err);
      });
    reqslist.push(reqs);
    let r = Promise.resolve();
    if (reqslist.length >= maxNumbers) {
      r = Promise.race(reqslist);
    }
    return r.then(() => next());
  }
  return next().then(() => Promise.allSettled(datalist));
}
const queues = ["/a?id=1", "/b?id=2", "/c?id=3", "/d?id=4", "/e?id=5"];
maxRequests(2, queues)
  .then(res => console.log("then:", res))
  .catch(err => console.log("catch:", err));
