/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 * 
 * 39. 组合总和
 * 递归调用
 */
var combinationSum = function(candidates, target) {
    
    var backtrade = function(candidates, start, target, solvespace, result) {
        if (target < 0) {
            return 
        }
        if (target === 0) {
            let copy = JSON.parse(JSON.stringify(solvespace))
            result.push(copy)
            return 
        }
        for(let i = start; i < candidates.length; i ++) {
            solvespace.push(candidates[i])
            backtrade(candidates, i, target - candidates[i], solvespace, result)
            solvespace.pop()
        }
    }

    let result = []
    let solvespace = []

    backtrade(candidates, 0, target, solvespace, result)
    return result
};

let candidates = [2,3,6,7]
let target = 7

console.log(combinationSum(candidates, target))