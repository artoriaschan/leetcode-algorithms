/**
 * https://leetcode.cn/problems/parsing-a-boolean-expression/
 */

struct Solution {}
use std::collections::VecDeque;
impl Solution {
    pub fn parse_bool_expr(expression: String) -> bool {
        let mut stack = VecDeque::new();
        let expr_vec = expression.chars();
        for c in expr_vec {
            if c == ',' {
                continue;
            } else if c != ')' {
                stack.push_back(c);
            } else {
                let (mut t, mut f) = (0, 0);
                loop {
                    if let Some(val) = stack.pop_back() {
                        if val == '(' {
                            break;
                        }
                        if val == 't' {
                            t += 1;
                        } else {
                            f += 1;
                        }
                    }
                }

                let op = stack.pop_back();
                match op {
                    Some('!') => {
                        if f == 1 {
                            stack.push_back('t');
                        } else {
                            stack.push_back('f');
                        }
                    }
                    Some('&') => {
                        if f == 0 {
                            stack.push_back('t');
                        } else {
                            stack.push_back('f');
                        }
                    }
                    Some('|') => {
                        if t > 0 {
                            stack.push_back('t');
                        } else {
                            stack.push_back('f');
                        }
                    }
                    _ => unreachable!(),
                }
            }
        }
        if let Some(val) = stack.pop_back() {
            val == 't'
        } else {
            false
        }
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let expression = String::from("!(&(f,t))");
        assert_eq!(Solution::parse_bool_expr(expression), true);
    }
}
