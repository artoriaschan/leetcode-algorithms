/**
 * https://leetcode.cn/problems/maximum-repeating-substring/
 */

struct Solution {}

impl Solution {
    pub fn max_repeating(sequence: String, word: String) -> i32 {
        let mut cnt = 0;
        while sequence.contains(&word.repeat(cnt as usize)) {
            cnt += 1;
        }
        cnt - 1
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let sequence = "ababc".into();
        let word = "ab".into();
        assert_eq!(Solution::max_repeating(sequence, word), 2);
    }
}
