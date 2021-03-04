/**
 * @param {number} n
 * @return {string}
 */
function generateTheString(n) {
  return "a".repeat(n - 1) + (n % 2 === 0 ? "b" : "a");
}
