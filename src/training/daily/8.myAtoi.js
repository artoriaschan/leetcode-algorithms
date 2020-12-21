/**
 * @param {string} str
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function myAtoi(str) {
  // eslint-disable-next-line no-useless-escape
  let res = str.trim().match(/^(\-|\+)?\d+/g);
  return res ? Math.max(Math.min(Number(res[0]), 2 ** 31 - 1), -(2 ** 31)) : 0;
}
