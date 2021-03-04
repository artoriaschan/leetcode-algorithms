/**
 * @param {string} str
 * @return {string}
 */
function toLowerCase(str) {
  // 使用内建API
  // return str.toLowerCase();
  let res = "";
  for (let char of str) {
    if (char.charCodeAt() <= 90 && char.charCodeAt() >= 65) {
      // 是大写哦 同词的大小写 码值相差32
      res += String.fromCharCode(char.charCodeAt() + 32);
    } else {
      res += char;
    }
  }
  return res;
}
