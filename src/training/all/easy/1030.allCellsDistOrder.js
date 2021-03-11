/**
 * @param {number} R
 * @param {number} C
 * @param {number} r0
 * @param {number} c0
 * @return {number[][]}
 */
function allCellsDistOrder(R, C, r0, c0) {
  const matrix = [];
  const origin = [r0, c0];
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      const point = [i, j];
      const distance = Math.abs(i - origin[0]) + Math.abs(j - origin[1]);
      matrix.push({
        point,
        distance,
      });
    }
  }

  return matrix
    .sort((a, b) => {
      return a.distance - b.distance;
    })
    .map(item => {
      return item.point;
    });
}
