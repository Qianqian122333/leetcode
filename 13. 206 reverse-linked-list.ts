class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let cur = head;
  while (cur !== null) {
    let nextTemp = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nextTemp;
  }
  return prev;
}

// 反转链表 (LeetCode 206)
// * --- 解题思路：迭代法 ---
// * 1. 定义两个指针 prev 和 cur，初始时 prev 指向 null，cur 指向 head。
// * 2. 遍历链表，直到 cur 为空：
// * - 保存 cur 的下一个节点 nextTemp。
// * - 将 cur 的 next 指针指向 prev，实现反转。
// * - 将 prev 移动到 cur，cur 移动到 nextTemp，继续下一轮迭代。
// * 3. 当遍历结束时，prev 指向新的头节点，返回 prev 即可。
