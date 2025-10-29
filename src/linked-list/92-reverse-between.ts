class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  let newHead = new ListNode(0, head);

  let prev = newHead;
  let current = head;

  for (let i = 1; i < left; i++) {
    prev = current!;
    current = current?.next!;
  }

  let beforeLeft = prev;
  let leftNode = current;

  let position = left;
  prev = beforeLeft;

  while (position <= right && current) {
    const next = current.next;

    current.next = prev;
    prev = current!;

    current = next!;

    position++;
  }

  beforeLeft.next = prev; // previous = new head of reversed part
  leftNode!.next = current;

  return newHead.next;
}

const node5 = new ListNode(5, null);
const node4 = new ListNode(4, node5);
const node3 = new ListNode(3, node4);
const node2 = new ListNode(2, node3);
const node1 = new ListNode(1, node2);

console.log(JSON.stringify(reverseBetween(node1, 2, 4)));
