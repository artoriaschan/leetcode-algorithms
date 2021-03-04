/**
 * @param {number[][]} A
 * @return {number[][]}
 */
function flipAndInvertImage(A) {
  const rows = A.length;
  const cols = A[0].length;
  const res = [];
  for (let i = 0; i < rows; i++) {
    const reve = A[i].reverse();
    for (let j = 0; j < cols; j++) {
      if (reve[j] === 0) reve[j] = 1;
      else reve[j] = 0;
    }
    res.push(reve);
  }
  return res;
}
