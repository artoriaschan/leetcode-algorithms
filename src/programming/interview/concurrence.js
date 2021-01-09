let index = 0;
const axios = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 1000);
  });
};
function multiRequest(urls, maxNum) {
  let length = urls.length;
  let reqList = []; // 临时存储请求个数
  let dataList = []; // 存储promise的请求的promise
  const next = () => {
    if (urls.length <= 0) return Promise.resolve();
    let path = urls.splice(0, 1);
    console.log(path, "开始");
    let req = Promise.resolve(axios(path)); // 请求
    dataList.push(req);
    // 用于存储临时得请求的promise
    let reqs = req.then(() => {
      // 当执行完毕时会调用 该方法将请求从reqList中删除
      reqList.splice(0, 1);
      console.log(path, "结束");
    });
    reqList.push(reqs);
    // 实现next可以继续调用 提供默认值
    let r = Promise.resolve();
    // 当reqList.length 大于规定时 使用Promise的方法race删除第一个执行完毕的请求
    if (reqList.length >= maxNum) {
      // 也就是说删除对应得请求
      r = Promise.race(reqList);
    }
    // 继续向下调用
    return r.then(() => next());
  };
  // 执行next 返回一个promise 通过Promise.all 执行dataList
  return next().then(() => Promise.all(dataList));
}
multiRequest(["/url1", "/url2", "/url3", "/url4", "/url5", "/url6"], 5).then(data => {
  console.log(data);
});

function concurrence(urls, maxNum) {}
