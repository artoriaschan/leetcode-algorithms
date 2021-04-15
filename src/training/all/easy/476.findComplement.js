/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
  return parseInt(new Array(num.toString(2).length).fill(1).join(""), 2) ^ num;
}
