// 分组合并
function exchange(nums) {
  let even = [];
  let odd = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) even.push(nums[i]);
    else odd.push(nums[i]);
  }
  return odd.concat(even);
}
// 双指针
function exchange1(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end) {
    while (start < end && nums[start] % 2 === 1) {
      start++;
    }
    while (start < end && nums[end] % 2 === 0) {
      end--;
    }
    [nums[start], nums[end]] = [nums[end], nums[start]];
  }
  return nums;
}
