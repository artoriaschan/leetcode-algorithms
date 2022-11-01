/**
 * https://leetcode.cn/problems/magical-string/
 */

struct Solution {}
impl Solution {
    pub fn magical_string(n: i32) -> i32 {
        let mut sign = true;
        let mut signs = vec![];

        (0..n as usize).fold(0, |mut ans, i| {
            signs.push(sign);

            if signs[i] {
                ans += 1;
            } else {
                signs.push(sign);
            }

            sign = !sign;
            ans
        })
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let n = 6;
        assert_eq!(Solution::magical_string(n), 3);
    }
}
