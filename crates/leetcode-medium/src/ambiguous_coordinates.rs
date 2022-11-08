/**
 * https://leetcode.cn/problems/ambiguous-coordinates/
 */

struct Solution {}
impl Solution {
    pub fn ambiguous_coordinates(s: String) -> Vec<String> {
        fn solve(s: &str) -> Vec<String> {
            let (mut ret, arr) = (vec![], s.chars().collect::<Vec<_>>());
            // 分割出的字符串是空字符串，直接返回空集合；
            // 非空字符串，并且以 0 开始，以 0 结束，则字符串不合法，直接返回空集合；
            if arr.len() == 0 || arr.len() > 1 && arr[0] == '0' && arr[arr.len() - 1] == '0' {
                return ret;
            }
            // 以 0 开始的非空字符串，分割为 0.xxx形式加入集合返回，因为后续的字符串不会再出现合法的字符串；
            if arr.len() > 1 && arr[0] == '0' {
                ret.push(format!("0.{}", &arr[1..].iter().collect::<String>()));
                return ret;
            }
            // 将当前字符串加入结果集，经过上述判断，说明该字符串肯定是合法的；
            ret.push(s.to_string());
            // 如果是以 0 结束的字符串，则合法的字符串只能是当前字符串，直接返回；
            if arr.len() == 0 || arr[arr.len() - 1] == '0' {
                return ret;
            }
            // 其余情况，遍历当前字符串，并找到每一个分割位置，插入 .，分割当前字符串加入结果集。
            for i in 1..arr.len() {
                ret.push(format!(
                    "{}.{}",
                    &arr[0..i].iter().collect::<String>(),
                    &arr[i..].iter().collect::<String>()
                ));
            }
            ret
        }
        let mut ret = vec![];
        // 忽略元字符串的左、右括号，遍历 [1, n - 1] 范围内的字符，n 为字符串长度。
        for i in 1..s.len() - 2 {
            let (left, right) = (solve(&s[1..i + 1]), solve(&s[i + 1..s.len() - 1]));
            for l in left.iter() {
                for r in right.iter() {
                    ret.push(format!("({}, {})", l, r));
                }
            }
        }
        ret
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let s = String::from("(123)");
        assert_eq!(
            Solution::ambiguous_coordinates(s),
            vec!["(1, 23)", "(1, 2.3)", "(12, 3)", "(1.2, 3)"]
        );
    }
}
