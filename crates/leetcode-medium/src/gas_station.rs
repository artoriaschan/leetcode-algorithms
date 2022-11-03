/**
 * https://leetcode.cn/problems/gas-station/
 */

struct Solution {}
impl Solution {
    pub fn can_complete_circuit(gas: Vec<i32>, cost: Vec<i32>) -> i32 {
        let n = gas.len();
        let mut i = 0;
        while i < n {
            let (mut sum_of_gas, mut sum_of_cost, mut cnt) = (0, 0, 0);
            // 从i依次遍历各个加油站
            while cnt < n {
                let j = (i + cnt) % n;
                sum_of_gas += gas[j];
                sum_of_cost += cost[j];
                if sum_of_cost > sum_of_gas {
                    break;
                }
                cnt += 1;
            }
            // 如果走过的加油站数量为 n，直接返回当前的 i
            if cnt == n {
                return i as i32;
            } else {
                // 我们首先检查第 0 个加油站，并试图判断能否环绕一周；如果不能，就从第一个无法到达的加油站开始继续检查。
                i = i + cnt + 1;
            }
        }
        -1
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let gas = vec![1, 2, 3, 4, 5];
        let cost = vec![3, 4, 5, 1, 2];
        assert_eq!(Solution::can_complete_circuit(gas, cost), 3);
    }
}
