/**
 * https://leetcode.cn/problems/divide-two-integers/
 */
struct Solution {}
impl Solution {
    // 倍增法
    pub fn divide(dividend: i32, divisor: i32) -> i32 {
        // 唯一越界情况
        if dividend == std::i32::MIN && divisor == -1 {
            return std::i32::MAX;
        }

        // 都转成负数, 并记录结果是否为负数.
        let negative = (dividend >= 0) != (divisor >= 0);
        let dividend = if dividend > 0 { -dividend } else { dividend };
        let divisor = if divisor > 0 { -divisor } else { divisor };

        // 计算除数乘以2^i的结果
        let mut p2 = Vec::with_capacity(33);
        let mut val = divisor;
        // 只需要计算结果>=被除数的部分
        // 如果结果不是负数说明已经越界了, 可以停止计算
        while val >= dividend && val < 0 {
            p2.push(val);
            val <<= 1;
        }
        let p2 = p2;

        // 求商每个bit的值
        let mut ret = 0;
        let mut val = 0;
        for i in (0..p2.len()).rev() {
            if dividend <= val + p2[i] && val + p2[i] < 0 {
                ret |= 1 << i;
                val += p2[i];
            }
        }
        return if negative { -ret } else { ret };
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let dividend = 10;
        let divisor = 3;
        assert_eq!(Solution::divide(dividend, divisor), 3);
    }
}
