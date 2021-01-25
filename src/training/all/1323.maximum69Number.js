/**
 * @param {number} num
 * @return {number}
 */
function maximum69Number(num) {
  let numStr = num.toString();
  let res = "";
  let flag = true;
  for (let char of numStr) {
    if (char !== "9" && flag) {
      res += "9";
      flag = false;
    } else {
      res += char;
    }
  }
  return parseInt(res, 10);
}
