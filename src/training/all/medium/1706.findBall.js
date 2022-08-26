/**
 * @param {number[][]} grid
 * @return {number[]}
 */
// 模拟：由上至下一层一层模拟
function findBall(grid) {
  const n = grid[0].length;
  const ans = new Array(n);
  for (let j = 0; j < n; j++) {
    let col = j;
    for (const row of grid) {
      // 方向
      // 左上角->右下角: 1
      // 右上角->左下角: -1
      const dir = row[col];
      col += dir; // 移动球
      if (col < 0 || col === n || row[col] !== dir) {
        // V 形: row[col] !== dir
        // 到达侧边: col < 0 || col === n
        col = -1;
        break;
      }
    }
    ans[j] = col;
  }
  return ans;
}
