/**
 * 有赞一面
 * 实现两个字符串形式的数值相加
 * @param {*} num1
 * @param {*} num2
 */
function addBigNumbers(num1, num2) {
  // code goes here
  const len = Math.max(num1.length, num2.length);
  num1 = num1.padStart(len, "0");
  num2 = num2.padStart(len, "0");
  let res = "";
  let x = 0;
  let y = 0;
  for (let i = len - 1; i >= 0; i--) {
    const sum = parseInt(num1[i], 10) + parseInt(num2[i], 10) + x;
    x = Math.floor(sum / 10);
    y = sum % 10;
    res = y + res;
  }
  if (x > 0) res = x + res;
  return res;
}

console.log("test addBigNumbers", addBigNumbers("1111", "93957")); // '95068'
console.log("test addBigNumbers", addBigNumbers("1111", "8889")); // '10000'
