/**
 * @param {number} n
 * @return {number}
 */
function fib(n) {
  if (n < 2) {
    return n;
  }
  let p = 0;
  let q = 0;
  let r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
}
