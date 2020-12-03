/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  var backtrade = function(candidates, start, target, solvespace, result) {
    if (target < 0) {
      return;
    }
    if (target === 0) {
      let copy = JSON.parse(JSON.stringify(solvespace)); // 复制数组
      result.push(copy);
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      solvespace.push(candidates[i]);
      backtrade(candidates, i + 1, target - candidates[i], solvespace, result);
      solvespace.pop();
    }
  };

  let result = [];
  let solvespace = [];

  backtrade(candidates, 0, target, solvespace, result);
  let noDuplicateResult = [];
  // 结果数组去重
  for (let i = 0; i < result.length; i++) {
    result[i].sort((a, b) => {
      return a - b;
    });
    let noDuplicate = false;
    for (let arr of noDuplicateResult) {
      if (arr.join("") === result[i].join("")) {
        noDuplicate = true;
        break;
      }
    }
    if (!noDuplicate) noDuplicateResult.push(result[i]);
  }
  return noDuplicateResult;
};

let candidates = [10, 1, 2, 7, 6, 1, 5];
let target = 8;

console.log(combinationSum2(candidates, target));
