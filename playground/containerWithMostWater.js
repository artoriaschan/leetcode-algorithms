/**
 * @param {number[]} height
 * @return {number}
 * 思路:
 *  1. 可以使用暴力穷举, 但会超出时间限制
 *  2. 双指针法
 */
var maxArea = function(height) {
    if(!height || height.length < 2) return 0
    let maxarea = 0
    let length = height.length, left = 0, right = length - 1
    while(left !== right){
        let area = (right - left) * Math.min(height[left], height[right])
        if(area > maxarea) {
            maxarea = area
        }
        if(height[left] <= height[right]) {
            left ++
        }else{
            right --
        }
    }
    return maxarea
};
console.log(maxArea([1,8,6,2,5,4,8,3,7]))