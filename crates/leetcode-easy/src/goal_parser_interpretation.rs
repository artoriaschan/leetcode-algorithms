/**
 * https://leetcode.cn/problems/goal-parser-interpretation/
 */
struct Solution {}
impl Solution {
    pub fn interpret(command: String) -> String {
        command.replace("()", "o").replace("(al)", "al")
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let command = String::from("G()(al)");
        assert_eq!(Solution::interpret(command), String::from("Goal"));
    }
}
