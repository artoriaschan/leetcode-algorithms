/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 * https://leetcode-cn.com/problems/evaluate-division/solution/jstu-de-xiang-lin-ju-zhen-by-bert0324/
 */
// eslint-disable-next-line no-unused-vars
function calcEquation(equations, values, queries) {
  // Graph Adjacency Matrix
  const matrix = {};
  equations.forEach((pair, i) => {
    if (!matrix[pair[0]]) matrix[pair[0]] = {};
    if (!matrix[pair[1]]) matrix[pair[1]] = {};
    matrix[pair[0]][pair[1]] = values[i];
    matrix[pair[1]][pair[0]] = 1 / values[i];
  });
  const keys = Object.keys(matrix);
  keys.forEach(x => {
    keys.forEach(y => {
      if (matrix[x][y]) {
        keys.forEach(xy => {
          if (matrix[y][xy]) matrix[x][xy] = matrix[y][xy] * matrix[x][y];
        });
      }
    });
  });
  return queries.map(query => (matrix[query[0]] && matrix[query[0]][query[1]] ? matrix[query[0]][query[1]] : -1));
}
