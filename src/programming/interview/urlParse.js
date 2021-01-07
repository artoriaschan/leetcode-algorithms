/**
 * 有赞一面
 * 1、解析 url 中的 queryString
 *
 * 输入：https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D&qwe&www=
 * 输出：
 * {
 *  name: coder,
 *  age: 20,
 *  callback: https://youzan.com?name=test,
 *  list: [a, b],
 *  json: {
 *      str: 'abc',
 *      num: 123
 *  },
 *  qwe: '',
 *  www: '',
 * }
 */

const url =
  "https://www.youzan.com?name=coder&age=20&callback=https%3A%2F%2Fyouzan.com%3Fname%3Dtest&list[]=a&list[]=b&json=%7B%22str%22%3A%22abc%22,%22num%22%3A123%7D&qws&www=";

function urlParse(url) {
  const query = url.split("?");
  console.log(query);
  const arr = query[1].split("&");
  const normalParams = {};
  const listParams = {};
  for (let item of arr) {
    const [key, value] = item.split("=");
    if (key.indexOf("[]") > -1) {
      const arrayName = key.slice(0, key.indexOf("[]"));
      if (listParams[arrayName]) {
        listParams[arrayName].push(value);
      } else {
        listParams[arrayName] = [value];
      }
      continue;
    }
    normalParams[key] = value ? decodeURIComponent(value) : "";
    // todo
    try {
      normalParams[key] = JSON.parse(normalParams[key]);
    } catch (err) {
      //
    }
  }
  const finalParams = Object.assign(normalParams, listParams);
  return finalParams;
}

urlParse(url);
