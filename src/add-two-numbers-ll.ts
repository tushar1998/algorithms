import { ListNode } from "./helpers/list-node";

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const l3 = new ListNode();
  let current = l3;

  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let val = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;

    if (val > 9) {
      let res = val.toString().split("").map(Number); // [2, 2]

      current.next = new ListNode(res[1]);
      carry = res[0];
    } else {
      current.next = new ListNode(val);
      carry = 0;
    }

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }

    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return l3.next;
}
