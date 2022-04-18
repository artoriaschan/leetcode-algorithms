const axios = url => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(url);
    }, 1000);
  });
};

function concurrence(urls, maxNum) {
  let i = 0;
  let ret = [];
  const executing = new Set();
  const enqueue = () => {
    if (urls.length === i) return Promise.resolve();
    const url = urls[i++];
    console.log(url, "开始");
    const p = Promise.resolve(axios(url));
    ret.push(p);
    executing.add(p);
    const clean = () => {
      executing.delete(p);
      console.log(url, "结束");
    };
    p.then(clean).catch(clean);

    let r = Promise.resolve();
    if (executing.size >= maxNum) {
      r = Promise.race(executing);
    }
    return r.then(() => enqueue());
  };
  return enqueue().then(() => Promise.all(ret));
}

concurrence(["/url1", "/url2", "/url3", "/url4", "/url5", "/url6", "/url7", "/url8"], 5).then(data => {
  console.log(data);
});
