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
  let current = head;

  while (current) {
    const next = current.next;

    current.next = prev;
    prev = current;

    current = next!;
  }

  return prev;
}

function reverseListR(head: ListNode | null): ListNode | null {
  if (!head) {
    return null;
  }

  let newHead = head;
  if (head?.next) {
    newHead = reverseListR(head.next)!;
    head.next.next = head;
  }

  head.next = null;

  return newHead;
}

const node5 = new ListNode(5, null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(JSON.stringify(reverseListR(node1)));
console.log(JSON.stringify(reverseListR(new ListNode(1, null))));
console.log(JSON.stringify(reverseListR(new ListNode())));
// console.log(JSON.stringify(reverseList(new ListNode(1, new ListNode(2, null)), 1)));
// console.log(JSON.stringify(reverseList(new ListNode(1, new ListNode(2, null)), 2)));
