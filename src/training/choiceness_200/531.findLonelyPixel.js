/**
 * @param {character[][]} picture
 * @return {number}
 * 思路:
 *  预处理
 */
// eslint-disable-next-line no-unused-vars
function findLonelyPixel(picture) {
  let rows = picture.length;
  let cols = picture[0].length;
  let rowsArr = new Array(rows).fill(0);
  let colsArr = new Array(cols).fill(0);
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (picture[row][col] === "B") {
        rowsArr[row] += 1;
        colsArr[col] += 1;
      }
    }
  }
  let ans = 0;

  for (let row = 0; row < rows; row++) {
    if (rowsArr[row] === 1) {
      for (let col = 0; col < cols; col++) {
        if (picture[row][col] === "B") {
          ans += colsArr[col] === 1;
        }
      }
    }
  }
  return ans;
}
