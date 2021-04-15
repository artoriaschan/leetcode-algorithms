/**
 * @param {number} numRows
 * @return {number[][]}
 */
function generate(numRows) {
  const result = [];
  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
      continue;
    }
    if (i === 1) {
      result.push([1, 1]);
      continue;
    }
    let prev = result[i - 1];
    const row = [];
    row.push(1);
    for (let i = 1; i < prev.length; i++) {
      const item = prev[i - 1] + prev[i];
      row.push(item);
    }
    row.push(1);
    result.push(row);
  }
  return result;
}
