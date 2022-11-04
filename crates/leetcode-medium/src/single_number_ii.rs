/**
 * https://leetcode.cn/problems/single-number-ii/
 */

struct Solution {}
impl Solution {
    pub fn single_number(nums: Vec<i32>) -> i32 {
        let (mut a, mut b) = (0, 0);
        for x in nums {
            b = (b ^ x) & !a;
            a = (a ^ x) & !b;
        }
        b
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let nums = vec![2, 2, 3, 2];
        assert_eq!(Solution::single_number(nums), 3);
    }
}
