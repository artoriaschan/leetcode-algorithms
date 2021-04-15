/**
 * @param {string[]} strs
 * @return {number}
 */
function minDeletionSize(strs) {
  let result = 0;
  for (let i = 0; i < strs[0].length; i++) {
    const col = [];
    for (let j = 0; j < strs.length; j++) {
      col.push(strs[j][i]);
    }
    console.log(col);
    for (let j = 0; j < col.length - 1; j++) {
      if (col[j].charCodeAt() > col[j + 1].charCodeAt()) {
        result++;
        break;
      }
    }
  }
  return result;
}

const strs = ["cba", "daf", "ghi"];
console.log(minDeletionSize(strs));
