/**
 * @param {number} num
 * @return {number}
 */
// 两位数的数字的翻译可以有一种翻译方式 (x > 25) 或者两种翻译方式（10 <= x <= 25）
// 后面数字的翻译结果依赖于前面翻译的结果
function translateNum(num) {
  let numStr = num.toString();
  let len = numStr.length;
  let x = 1;
  let y = 1;
  for (let i = 2; i <= len; i++) {
    let sub = numStr.substring(i - 2, i);
    let z = parseInt(sub, 10) >= 10 && parseInt(sub, 10) <= 25 ? x + y : x;
    y = x;
    x = z;
  }
  return x;
}
