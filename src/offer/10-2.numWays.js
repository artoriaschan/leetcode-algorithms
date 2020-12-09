/**
 * @param {number} n
 * @return {number}
 */
function numWays(n) {
  let prepre = 1;
  let pre = 1;
  let sum;
  for (let i = 0; i < n; i++) {
    sum = (prepre + pre) % 1000000007;
    prepre = pre;
    pre = sum;
  }
  return prepre;
}

function numWays1(n) {
  if (n === 1) return 1;
  if (n === 2) return 2;
  return numWays1(n - 1) + numWays1(n - 2);
}
