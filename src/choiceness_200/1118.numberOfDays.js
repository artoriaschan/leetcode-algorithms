/**
 * @param {number} Y
 * @param {number} M
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function numberOfDays(Y, M) {
  let monthDay = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  function isLeapYear(Year) {
    if ((Year % 4 === 0 && Year % 100 !== 0) || Year % 400 === 0) {
      return true;
    }
    return false;
  }
  if (M === 2 && isLeapYear(Y)) return 29;
  return monthDay[M];
}
