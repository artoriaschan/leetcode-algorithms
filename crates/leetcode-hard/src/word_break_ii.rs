/**
 * https://leetcode.cn/problems/word-break-ii/
 */
struct Solution {}
use std::collections::HashSet;
impl Solution {
    // 回溯
    fn backtrack<'a>(
        word_dict: &HashSet<String>,
        s: &'a str,
        shortest_word_len: usize,
        longest_word_len: usize,
        words: &mut Vec<&'a str>,
        ans: &mut Vec<String>,
    ) {
        if s.is_empty() {
            ans.push(words.join(" "));
            return;
        }

        for i in shortest_word_len..=longest_word_len.min(s.len()) {
            if word_dict.contains(&s[0..i]) {
                words.push(&s[0..i]);
                Self::backtrack(
                    word_dict,
                    &s[i..],
                    shortest_word_len,
                    longest_word_len,
                    words,
                    ans,
                );
                words.pop();
            }
        }
    }
    pub fn word_break(s: String, word_dict: Vec<String>) -> Vec<String> {
        let word_dict = word_dict.into_iter().collect::<HashSet<String>>();

        let mut shortest_word_len = u32::MAX as usize;
        let mut longest_word_len = 0;
        for word in word_dict.iter() {
            shortest_word_len = shortest_word_len.min(word.len());
            longest_word_len = longest_word_len.max(word.len());
        }

        let mut ans = vec![];
        Self::backtrack(
            &word_dict,
            &s,
            shortest_word_len,
            longest_word_len,
            &mut vec![],
            &mut ans,
        );
        ans
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let s = String::from("catsanddog");
        let wordDict = vec![
            String::from("cat"),
            String::from("cats"),
            String::from("and"),
            String::from("sand"),
            String::from("dog"),
        ];
        let expect_result = vec![String::from("cat sand dog"), String::from("cats and dog")];
        assert_eq!(Solution::word_break(s, wordDict), expect_result);
    }
}
