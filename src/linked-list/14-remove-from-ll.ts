class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head?.next) {
    return null;
  }

  const dummy = new ListNode(0, head);

  let slow = dummy;
  let fast = dummy;

  for (let i = 0; i < n; i++) {
    fast = fast.next!;
  }

  while (fast?.next) {
    fast = fast.next;
    slow = slow.next!;
  }

  slow.next = slow.next!.next;

  return dummy.next;
}

const node5 = new ListNode(5, null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(JSON.stringify(removeNthFromEnd(node1, 2)));
console.log(JSON.stringify(removeNthFromEnd(new ListNode(1, null), 1)));
console.log(JSON.stringify(removeNthFromEnd(new ListNode(1, new ListNode(2, null)), 1)));
console.log(JSON.stringify(removeNthFromEnd(new ListNode(1, new ListNode(2, null)), 2)));
