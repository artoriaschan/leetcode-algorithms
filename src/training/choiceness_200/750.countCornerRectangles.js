/**
 * @param {number[][]} grid
 * @return {number}
 * 思路:
 *  我们可以转换一下思想：每增加一行，角矩形的数量增加了多少。
 * 算法：
 *  我们用 count[i, j] 来记录 row[i] = row[j] = 1 的次数。
 *  当我们处理新的一行时，对于每一对 new_row[i] = new_row[j] = 1，我们添加 count[i, j] 到答案中，然后 count[i, j]++。
 */
// eslint-disable-next-line no-unused-vars
function countCornerRectangles(grid) {
  let count = new Map();
  let ans = 0;
  for (let row of grid) {
    for (let c1 = 0; c1 < row.length; ++c1)
      if (row[c1] === 1) {
        for (let c2 = c1 + 1; c2 < row.length; ++c2)
          if (row[c2] === 1) {
            let pos = c1 * 200 + c2;
            let c = count.get(pos) || 0;
            ans += c;
            count.set(pos, c + 1);
          }
      }
  }
  return ans;
}
