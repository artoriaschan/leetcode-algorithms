/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// eslint-disable-next-line no-unused-vars
function nextPermutation(nums) {
  let length = nums.length;
  let minMax = null;
  let minMaxIndex = 0;
  let changeIndex = -1;
  for (let i = length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      changeIndex = i - 1;
      for (let j = changeIndex + 1; j < length; j++) {
        if (nums[j] > nums[changeIndex]) {
          if (!minMax || minMax >= nums[j]) {
            minMax = nums[j];
            minMaxIndex = j;
          }
        }
      }
      let temp = nums[changeIndex];
      nums[changeIndex] = minMax;
      nums[minMaxIndex] = temp;
      break;
    }
  }
  // 交换
  let swapPart = nums.splice(changeIndex + 1);
  swapPart.reverse();
  nums.push(...swapPart);
}
