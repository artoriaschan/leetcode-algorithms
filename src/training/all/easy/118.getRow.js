// https://leetcode-cn.com/problems/pascals-triangle-ii/
/**
 * @param {number} rowIndex
 * @return {number[]}
 */

// 当前行第 i 项的计算只与上一行第 i - 1 项及第 i 项有关。
function getRow(rowIndex) {
  const row = new Array(rowIndex + 1).fill(0);
  row[0] = 1;
  for (let i = 1; i <= rowIndex; i++) {
    for (let j = i; j > 0; j--) {
      row[j] += row[j - 1];
    }
  }
  return row;
}

function getRow1(rowIndex) {
  let curRow = [1];
  if (rowIndex === 0) return curRow;
  for (let i = 1; i <= rowIndex; i++) {
    curRow = genCurRow(i, curRow);
  }
  return curRow;
}

function genCurRow(idx, pastRow) {
  const row = [1];
  for (let i = 0; i < pastRow.length - 1; i++) {
    const sum = pastRow[i] + pastRow[i + 1];
    row.push(sum);
  }
  row.push(1);
  return row;
}
