/**
 * https://leetcode.cn/problems/minimum-size-subarray-sum/
 */

struct Solution {}

impl Solution {
    // 滑动窗口
    pub fn min_sub_array_len(target: i32, nums: Vec<i32>) -> i32 {
        let mut sum = 0;
        let mut ans = i32::MAX;
        let mut s = 0;

        for i in 0..nums.len() {
            sum += nums[i];
            while sum >= target {
                sum -= nums[s];
                ans = ans.min((i - s + 1) as i32);
                s += 1;
            }
        }
        if ans == i32::MAX {
            0
        } else {
            ans
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn it_works() {
        let target = 7;
        let nums = vec![2, 3, 1, 2, 4, 3];

        assert_eq!(Solution::min_sub_array_len(target, nums), 2);
    }
}
