pub struct Solution {}

impl Solution {
    pub fn reorder_spaces(text: String) -> String {
        let arr = text
            .split_ascii_whitespace()
            .map(|x| x.to_string())
            .collect::<Vec<_>>();
        let (word_cnt, space_cnt) = (
            arr.len(),
            text.as_bytes().iter().filter(|x| **x == ' ' as u8).count(),
        );
        let repeat = if word_cnt <= 1 {
            0
        } else {
            space_cnt / (word_cnt - 1)
        };
        format!(
            "{}{}",
            arr.join(" ".repeat(repeat).as_str()),
            " ".repeat(space_cnt - repeat * (word_cnt - 1))
        )
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let str = String::from("  walks  udp package   into  bar a");
        assert_eq!(
            Solution::reorder_spaces(str),
            "walks  udp  package  into  bar  a "
        );
    }
}
