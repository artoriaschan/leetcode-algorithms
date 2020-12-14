// 利用a标签解析url
function urlParseWithATag(url) {
  const a = document.createElement("a");
  a.href = url;
  // const div = document.createElement("div");
  // for (const key in a) {
  //   // eslint-disable-next-line no-unused-expressions
  //   !(key in div) && console.log(`${key} = ${a[key]}`);
  // }
  const query = a.search.slice(1).split("&");
  const params = {};
  for (let param of query) {
    let [key, value] = param.split("=");
    params[key] = decodeURIComponent(value);
  }
  return params;
}

// 浏览器环境下利用location接口或者使用URL
function urlParse(url) {
  let query;
  if (typeof url === "string") {
    let urlObj = new URL(url);
    query = urlObj.search.slice(1).split("&");
  } else {
    // eslint-disable-next-line no-restricted-globals
    query = location.search.slice(1).split("&");
  }
  const params = {};
  for (let param of query) {
    let [key, value] = param.split("=");
    // 在进一步处理则是自动 decode 编码
    params[key] = decodeURIComponent(value);
  }
  return params;
}

// 使用正则解析
function urlParseByRegExp(url) {
  const regexp = /^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/;
  const fields = ["url", "scheme", "slash", "host", "port", "path", "query", "hash"];
  const parsed = regexp.exec(url);
  const urlObj = {};
  for (let i = 0; i < parsed.length; i++) {
    urlObj[fields[i]] = parsed[i];
  }
  const query = urlObj.query.split("&");
  const params = {};
  for (let param of query) {
    let [key, value] = param.split("=");
    params[key] = decodeURIComponent(value);
  }
  return params;
}

const url =
  "https://www.google.com/search?newwindow=1&sxsrf=ALeKk02J9ZBV-v1mAocoR9g9kaYYPy2NEw%3A1607598768217&ei=sALSX8jrDJC1mAXOr6fQCQ&q=js+url+%E8%A7%A3%E6%9E%90&oq=js+url+%E8%A7%A3%E6%9E%90&gs_lcp=CgZwc3ktYWIQAzIECCMQJzIECAAQHjIGCAAQCBAeOgcIIxDqAhAnOgQIABBDOggIABCxAxCDAToFCAAQsQM6AggAOgUIABDLAToGCAAQBRAeOgUIIRCgAToHCCEQChCgAVCi4vIeWNeA8x5guILzHmgBcAB4AIABzwKIAYgYkgEHMC44LjMuM5gBAKABAaoBB2d3cy13aXqwAQrAAQE&sclient=psy-ab&ved=0ahUKEwjIg5WMpMPtAhWQGqYKHc7XCZoQ4dUDCA0&uact=5";

const params1 = urlParse(url);
console.log(params1);
const params2 = urlParseByRegExp(url);
console.log(params2);
