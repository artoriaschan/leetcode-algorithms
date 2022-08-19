/**
 * @param {number} n
 * @return {number}
 */
function cuttingRope(n) {
  if (n <= 3) return n - 1;
  const a = Math.floor(n / 3); // 把绳子尽可能切为多个长度为 3 的片段
  const b = n % 3;
  if (b === 0) return Math.pow(3, a);
  if (b === 1) return Math.pow(3, a - 1) * 4; // 若最后一段绳子长度为 1 , 则应把一份 3 + 1 替换为 2 + 2
  return Math.pow(3, a) * 2; // 若最后一段绳子长度为 2 , 则保留
}
