/**
 * @param {string} num
 * @return {string}
 */
// eslint-disable-next-line no-unused-vars
function toHexspeak(num) {
  let hexStr = parseInt(num, 10).toString(16);
  let transfromHex = hexStr
    .replace(/1/g, "I")
    .replace(/0/g, "O")
    .toUpperCase();
  const checkArr = ["A", "B", "C", "D", "E", "F", "I", "O"];
  for (let word of transfromHex) {
    if (checkArr.indexOf(word) < 0) {
      return "ERROR";
    }
  }
  return transfromHex;
}
