/**
 * https://leetcode.cn/problems/reach-a-number/
 */

struct Solution {}
impl Solution {
    pub fn reach_number(target: i32) -> i32 {
        // 不考虑方向问题
        let mut abs_target = target.abs();
        let (mut ans, mut sum) = (0, 0);
        // 从 1 到 n 一直累加，直到 sum == target，或者 sum - target为正偶数
        while sum < abs_target || (sum - abs_target) % 2 == 1 {
            ans += 1;
            sum += ans;
        }
        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        assert_eq!(Solution::reach_number(2), 3);
    }
}
