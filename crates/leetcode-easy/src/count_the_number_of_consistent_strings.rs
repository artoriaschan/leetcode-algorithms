/**
 * https://leetcode.cn/problems/count-the-number-of-consistent-strings/
 */
struct Solution {}

use std::collections::HashSet;
use std::iter::FromIterator;

impl Solution {
    // pub fn count_consistent_strings(allowed: String, words: Vec<String>) -> i32 {
    //     let (mut bit_cnt, mut cnt) = (0, 0);
    //     for ch in allowed.as_bytes().iter() {
    //         bit_cnt |= 1 << (ch - b'a') as i32;
    //     }
    //     for word in words {
    //         let mut is_exist = true;
    //         for ch in word.as_bytes().iter() {
    //             if bit_cnt & (1 << (ch - b'a') as i32) == 0 {
    //                 is_exist = false;
    //                 break;
    //             }
    //         }
    //         cnt += if is_exist { 1 } else { 0 };
    //     }
    //     cnt
    // }
    pub fn count_consistent_strings(allowed: String, words: Vec<String>) -> i32 {
        let allowed: HashSet<u8> = HashSet::from_iter(allowed.bytes());
        let mut cnt = 0;

        for s in words {
            if HashSet::from_iter(s.bytes()).is_subset(&allowed) {
                cnt += 1;
            }
        }

        cnt
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let allowed = String::from("ab");
        let words = ["ad", "bd", "aaab", "baa", "badab"]
            .map(String::from)
            .to_vec();
        assert_eq!(Solution::count_consistent_strings(allowed, words), 2);
    }
}
