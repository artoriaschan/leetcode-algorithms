/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */
function createTargetArray(nums, index) {
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    const idx = index[i];
    const num = nums[i];
    let tmp = [];
    tmp = tmp.concat(res.slice(0, idx));
    tmp.push(num);
    tmp = tmp.concat(res.slice(idx));
    res = tmp;
  }
  return res;
}

const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];

console.log(createTargetArray(nums, index));

// var createTargetArray = function(nums, index) {
//   const res = [];
//   for(let i = 0; i < index.length; i ++) {
//       const idx = index[i];
//       const num = nums[i]
//       res.splice(idx, 0, num)
//   }
//   return res;
// };
