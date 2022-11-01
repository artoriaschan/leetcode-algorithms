/**
 * https://leetcode.cn/problems/largest-number/
 */

struct Solution {}

use std::cmp::Ordering;

impl Solution {
    pub fn largest_number(mut nums: Vec<i32>) -> String {
        // let cmp = |x: i32, y: i32| -> Ordering {
        //     let (x, y) = (x as i64, y as i64);
        //     let (mut sx, mut sy) = (10, 10);
        //     while sx <= x {
        //         sx *= 10
        //     }
        //     while sy <= y {
        //         sy *= 10
        //     }
        //     (sx * y + x).cmp(&(sy * x + y))
        // };
        // nums.sort_unstable_by(|&a, &b| cmp(a, b));
        nums.sort_by(|a, b| format!("{}{}", b, a).cmp(&format!("{}{}", a, b)));
        if nums[0] == 0 {
            return "0".into();
        }
        nums.iter().map(|i| i.to_string()).collect::<String>()
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let nums = vec![10, 2];
        assert_eq!(Solution::largest_number(nums), String::from("210"));
    }
}
