/**
 * https://leetcode.cn/problems/reorder-list/
 */

// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}

pub struct Solution {}

impl Solution {
    pub fn reorder_list(head: &mut Option<Box<ListNode>>) {
        let mut buf = vec![];
        let mut node = head.take();

        while let Some(mut a) = node {
            node = a.next.take();
            buf.push(a);
        }

        let mut dump = Some(Box::new(ListNode::new(0)));
        let mut h = dump.as_mut();
        let n = buf.len();
        for i in 0..((n + 1) / 2) {
            let (l, r) = (i, n - i - 1);
            h.as_mut().unwrap().next = Some(buf[l].clone());
            h = h.unwrap().next.as_mut();
            if r > l {
                h.as_mut().unwrap().next = Some(buf[r].clone());
                h = h.unwrap().next.as_mut();
            }
        }
        *head = dump.unwrap().next;
    }
}
