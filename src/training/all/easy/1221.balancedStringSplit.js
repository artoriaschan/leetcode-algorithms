/**
 * @param {string} s
 * @return {number}
 */
function balancedStringSplit(s) {
  let res = 0;
  let LNum = 0;
  let RNum = 0;
  for (const c of s) {
    if (c === "L") LNum++;
    if (c === "R") RNum++;
    if (LNum === RNum) {
      res++;
      LNum = 0;
      RNum = 0;
    }
  }
  if (LNum !== 0 || RNum !== 0) return 1;
  return res;
}
