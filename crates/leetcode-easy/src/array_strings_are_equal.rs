/**
 * https://leetcode.cn/problems/check-if-two-string-arrays-are-equivalent/
 */
struct Solution {}

impl Solution {
    pub fn array_strings_are_equal(word1: Vec<String>, word2: Vec<String>) -> bool {
        word1.join("") == word2.join("")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let word1 = vec![String::from("ab"), String::from("c")];
        let word2 = vec![String::from("a"), String::from("bc")];
        assert_eq!(Solution::array_strings_are_equal(word1, word2), true);
    }
}
