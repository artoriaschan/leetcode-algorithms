/**
 * https://leetcode.cn/problems/minimize-deviation-in-array/
 */
struct Solution {}

use std::{cmp, collections::BinaryHeap};

impl Solution {
    pub fn minimum_deviation(nums: Vec<i32>) -> i32 {
        let mut heap = BinaryHeap::new();
        let mut min_odd: i32 = i32::MAX;
        let mut ans: i32 = i32::MAX;

        for num in nums {
            let odd = if num % 2 == 1 { num * 2 } else { num };
            heap.push(odd);
            min_odd = cmp::min(min_odd, odd);
        }

        loop {
            if let Some(top) = heap.pop() {
                ans = cmp::min(ans, top - min_odd);
                if top % 2 == 1 {
                    break;
                }
                min_odd = cmp::min(min_odd, top / 2);
                heap.push(top / 2);
            }
        }

        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let nums = vec![4, 1, 5, 20, 3];
        assert_eq!(Solution::minimum_deviation(nums), 3);
    }
}
