/**
 * @param {number[]} nums
 * @return {number[]}
 */
function decompressRLElist(nums) {
  const res = [];
  for (let i = 0; i < Math.floor(nums.length / 2); i++) {
    const [freq, val] = [nums[2 * i], nums[2 * i + 1]];
    for (let j = 0; j < freq; j++) res.push(val);
  }
  return res;
}

const nums = [1, 2, 3, 4];
console.log(decompressRLElist(nums));
