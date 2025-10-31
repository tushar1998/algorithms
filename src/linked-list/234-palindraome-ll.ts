class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0;
    this.next = next === undefined ? null : next;
  }
}

function isPalindrome(head: ListNode | null): boolean {
  if (head?.next === null) {
    return true;
  }

  const stack: Array<number> = [];
  let current = head;

  while (current) {
    stack.push(current.val);
    current = current.next;
  }

  current = head;

  while (current) {
    if (current.val !== stack.pop()) {
      return false;
    }

    current = current.next;
  }

  return true;
}

// const node4 = new ListNode(1, null);
const node3 = new ListNode(1, null);
const node2 = new ListNode(0, node3);
const node1 = new ListNode(1, node2);

console.log(JSON.stringify(isPalindrome(node1)));
