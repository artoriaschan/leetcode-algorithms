/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
// eslint-disable-next-line no-unused-vars
function movingCount(m, n, k) {
  let total = 0;
  let obj = {};
  function runing(i, j) {
    // 边界直接返回
    if (i < 0 || j < 0 || i >= m || j >= n) return;
    let sum = (i + "" + j).split("").reduce((a, b) => +a + +b);
    let axis = JSON.stringify([i, j]);
    if (sum <= k && !obj[axis]) {
      // 当该点还没走过 和 满足 不大于k 时 继续执行
      total++;
      obj[axis] = true; // 标识该点已经走过, 下次不进
      // 尝试 上下左右 走
      runing(i + 1, j);
      runing(i, j + 1);
      runing(i - 1, j);
      runing(i, j - 1);
    }
  }
  runing(0, 0);
  return total;
}
