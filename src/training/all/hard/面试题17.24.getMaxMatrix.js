// https://leetcode-cn.com/problems/max-submatrix-lcci/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
function getMaxMatrix(matrix) {
  const answer = [];
  const rows = matrix.length;
  const cols = matrix[0].length;
  const b = [];
  let sum = 0;
  let maxsum = -Infinity;
  let bestr1 = 0;
  let bestc1 = 0;

  for (let i = 0; i < rows; i++) {
    for (let t = 0; t < cols; t++) b[t] = 0;
    for (let j = i; j < rows; j++) {
      sum = 0;
      for (let k = 0; k < cols; k++) {
        b[k] += matrix[j][k];
        if (sum > 0) sum += b[k];
        else {
          sum = b[k];
          bestr1 = i;
          bestc1 = k;
        }
        if (sum > maxsum) {
          maxsum = sum;
          answer[0] = bestr1; // 更新答案
          answer[1] = bestc1;
          answer[2] = j;
          answer[3] = k;
        }
      }
    }
  }
  return answer;
}
