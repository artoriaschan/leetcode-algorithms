const axios = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 1000);
  });
};

function concurrence(urls, maxNum) {
  let dataList = [];
  let reqCallbacks = [];
  const next = () => {
    if (urls.length <= 0) return Promise.resolve();
    let [path] = urls.splice(0, 1);
    console.log(path, "开始");
    let req = Promise.resolve(axios(path));
    dataList.push(req);

    let reqCallback = req.then(() => {
      reqCallbacks.splice(0, 1);
      console.log(path, "结束");
    });
    reqCallbacks.push(reqCallback);

    let r = Promise.resolve();
    if (reqCallbacks.length >= maxNum) {
      r = Promise.race(reqCallbacks);
    }
    return r.then(() => next());
  };
  return next().then(() => Promise.all(dataList));
}

concurrence(["/url1", "/url2", "/url3", "/url4", "/url5", "/url6", "/url7", "/url8"], 5).then(data => {
  console.log(data);
});
