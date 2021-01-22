/**
 * @param {string} s
 * @return {number}
 */
const processer = {
  A: (x, y) => ({
    x: x * 2 + y,
    y,
  }),
  B: (x, y) => ({
    x,
    y: y * 2 + x,
  }),
};
function calculate(s) {
  let x = 1;
  let y = 0;
  for (let opt of s) {
    const res = processer[opt](x, y);
    x = res.x;
    y = res.y;
  }
  return x + y;
}
