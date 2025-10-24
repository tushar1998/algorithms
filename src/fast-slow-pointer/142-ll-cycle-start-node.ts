// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head;
  let fast = head;

  while (fast?.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (fast === slow) {
      break;
    }
  }

  if (!fast?.next) {
    return null;
  }

  let slow2 = head;

  while (slow2?.next) {
    slow2 = slow2?.next;
    slow = slow!.next;

    if (slow2 === slow) {
      return slow;
    }
  }

  return null;
}
