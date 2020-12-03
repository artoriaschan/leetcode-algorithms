/**
 * @name Z字形转换
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */

let convert = function(s, numRows) {
  let len = s.length; // 字符数量
  if (len < 3 || numRows == 1) return s;
  let group = numRows * 2 - 2; // 单圈数量
  let quan = Math.ceil(len / group); // 共几大循环(一下一上)
  let str = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < quan; j++) {
      if (i == 0) {
        if (s[group * j] != undefined) str = str + s[group * j];
      } else if (i == numRows - 1) {
        if (s[group * j + numRows - 1] != undefined) str = str + s[group * j + numRows - 1];
      } else {
        if (s[group * j + i] != undefined) str = str + s[group * j + i];
        if (s[group * (j + 1) - i] != undefined) str = str + s[group * (j + 1) - i];
      }
    }
  }
  return str;
};

let str = "PAYPALISHIRING",
  numRows = 3;
console.log(convert(str, numRows));
