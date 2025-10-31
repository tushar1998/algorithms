class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const newHead = new ListNode(0, null);

  let tail = newHead;

  while (list1 && list2) {
    if (list1?.val < list2?.val) {
      tail.next = list1;
      list1 = list1.next;
    } else {
      tail.next = list2;
      list2 = list2.next;
    }

    tail = tail.next;
  }

  if (list1) {
    tail.next = list1;
  }

  if (list2) {
    tail.next = list2;
  }

  return newHead.next;
}

// const node5 = new ListNode(5, null);
// const node4 = new ListNode(4, node5);
// const node3 = new ListNode(3, node4);
// const node2 = new ListNode(2, node3);
// const node1 = new ListNode(1, node2);

const ll1 = new ListNode(1, new ListNode(2, new ListNode(4, null)));
const ll2 = new ListNode(1, new ListNode(3, new ListNode(4, null)));

console.log(JSON.stringify(mergeTwoLists(ll1, ll2)));
