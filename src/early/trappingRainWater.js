/**
 * @param {number[]} height
 * @return {number}
 * C++ 版
 * 从两端往中间逼近，记录左右两端高度最高值，那么对于这两端最高值中间部分，如果高度低于两端最高值，能接的雨水取决于两端最高值中的最小值。
 * 参考链接: https://blog.csdn.net/lv1224/article/details/81023833
 * class Solution {
    public:
        int trap(vector<int>& height) {
            int n=height.size(),left=0,right=n-1;
            int lefth=0,righth=0,area=0;
            while(left<right){
                if(height[left]<height[right]){
                    if(lefth<=height[left]) lefth=height[left];
                    else area+=lefth-height[left];
                    left++;
                }
                else{
                    if(righth<=height[right]) righth=height[right];
                    else area+=righth-height[right];
                    right--;
                }
            }
            return area;
        }
    };
 */
var trap = function(height) {
  let n = height.length,
    left = 0,
    right = n - 1;
  let lefth = 0,
    righth = 0,
    area = 0;
  while (left < right) {
    if (height[left] < height[right]) {
      if (lefth <= height[left]) lefth = height[left];
      else area += lefth - height[left];
      left++;
    } else {
      if (righth <= height[right]) righth = height[right];
      else area += righth - height[right];
      right--;
    }
  }
  return area;
};

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
