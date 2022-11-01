/**
 * https://leetcode.cn/problems/maximum-swap/
 */

struct Solution {}

impl Solution {
    // 贪心
    pub fn maximum_swap(num: i32) -> i32 {
        let mut s = format!("{}", num).to_string().bytes().collect::<Vec<_>>();
        let (mut max, mut max_idx) = (b'0' - 1, s.len());
        let (mut idx1, mut idx2) = (s.len(), s.len());

        // 右边越大的数字与左边较小的数字进行交换，这样产生的整数才能保证越大。
        for i in (0..s.len()).rev() {
            if s[i] > max {
                max = s[i];
                max_idx = i;
            } else if s[i] < max {
                idx1 = max_idx;
                idx2 = i;
            }
        }

        if idx1 != s.len() && idx2 != s.len() {
            s.swap(idx1, idx2);
            String::from_utf8(s).unwrap().parse().unwrap()
        } else {
            num
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let n = 2736;
        assert_eq!(Solution::maximum_swap(n), 7236);
    }
}
