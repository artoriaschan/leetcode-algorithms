/**
 * https://leetcode.cn/problems/design-linked-list/
 */
use std::{cell::RefCell, rc::Rc};

struct ListNode {
    prev: Option<Rc<RefCell<ListNode>>>,
    next: Option<Rc<RefCell<ListNode>>>,
    val: i32,
}

impl ListNode {
    fn new(
        prev: Option<Rc<RefCell<ListNode>>>,
        next: Option<Rc<RefCell<ListNode>>>,
        val: i32,
    ) -> Self {
        ListNode { prev, next, val }
    }
}
struct MyLinkedList {
    head: Option<Rc<RefCell<ListNode>>>,
    size: i32,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MyLinkedList {
    fn new() -> Self {
        let head = Rc::new(RefCell::new(ListNode::new(None, None, -1)));
        head.borrow_mut().prev = Some(head.clone());
        head.borrow_mut().next = Some(head.clone());
        MyLinkedList {
            head: Some(head),
            size: 0,
        }
    }

    fn get(&self, index: i32) -> i32 {
        if index < 0 || index >= self.size {
            return -1;
        }
        self.find_node(index).as_ref().unwrap().borrow().val
    }

    fn add_at_head(&mut self, val: i32) {
        let next = self.head.as_ref().unwrap().borrow().next.clone();
        let curr = Rc::new(RefCell::new(ListNode::new(
            self.head.clone(),
            next.clone(),
            val,
        )));
        next.clone().as_ref().unwrap().borrow_mut().prev = Some(curr.clone());
        self.head.as_ref().unwrap().borrow_mut().next = Some(curr.clone());
        self.size += 1;
    }

    fn add_at_tail(&mut self, val: i32) {
        let prev = self.head.as_ref().unwrap().borrow().prev.clone();
        let curr = Rc::new(RefCell::new(ListNode::new(
            prev.clone(),
            self.head.clone(),
            val,
        )));
        prev.clone().as_ref().unwrap().borrow_mut().next = Some(curr.clone());
        self.head.as_ref().unwrap().borrow_mut().prev = Some(curr.clone());
        self.size += 1;
    }

    fn add_at_index(&mut self, index: i32, val: i32) {
        if index > self.size {
            return;
        }
        if index < 0 {
            self.add_at_head(val);
            return;
        }
        if index == self.size {
            self.add_at_tail(val);
            return;
        }
        let curr = self.find_node(index);
        let new_node = Rc::new(RefCell::new(ListNode::new(
            curr.as_ref().unwrap().borrow().prev.clone(),
            curr.clone(),
            val,
        )));
        curr.as_ref()
            .unwrap()
            .borrow_mut()
            .prev
            .as_ref()
            .unwrap()
            .borrow_mut()
            .next = Some(new_node.clone());
        curr.as_ref().unwrap().borrow_mut().prev = Some(new_node.clone());
        self.size += 1;
    }

    fn delete_at_index(&mut self, index: i32) {
        if self.size <= 0 || index < 0 || index >= self.size {
            return;
        }
        if self.size == 1 {
            self.head.as_ref().unwrap().borrow_mut().prev = self.head.clone();
            self.head.as_ref().unwrap().borrow_mut().next = self.head.clone();
            self.size -= 1;
        }
        let curr = self.find_node(index);
        let (prev, next) = (
            curr.as_ref().unwrap().borrow().prev.clone(),
            curr.as_ref().unwrap().borrow().next.clone(),
        );
        prev.clone().as_ref().unwrap().borrow_mut().next = next.clone();
        next.clone().as_ref().unwrap().borrow_mut().prev = prev.clone();
        self.size -= 1;
    }

    fn find_node(&self, index: i32) -> Option<Rc<RefCell<ListNode>>> {
        if self.size == 0 {
            return self.head.as_ref().unwrap().borrow().next.clone();
        }
        if self.size == index {
            return self.head.as_ref().unwrap().borrow().prev.clone();
        }
        let mut curr = self.head.as_ref().unwrap().borrow().next.clone();
        for _ in 0..index {
            let node = curr.as_ref().unwrap().borrow().next.clone();
            curr = node
        }
        return curr;
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn it_works() {
        let mut obj = MyLinkedList::new();
        obj.add_at_head(1);
        obj.add_at_tail(3);
        obj.add_at_index(1, 2);
        assert_eq!(obj.get(1), 2);
        obj.delete_at_index(1);
        assert_eq!(obj.get(1), 3);
    }
}
