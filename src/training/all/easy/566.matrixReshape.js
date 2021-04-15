/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
function matrixReshape(nums, r, c) {
  const rows = nums.length;
  const cols = nums[0].length;
  if (rows * cols !== r * c) return nums;
  const result = [];
  let tmp = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      tmp.push(nums[i][j]);
      if (tmp.length === c) {
        result.push(tmp);
        tmp = [];
      }
    }
  }
  return result;
}
