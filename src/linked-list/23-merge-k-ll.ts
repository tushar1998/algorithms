class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
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

  while (lists.length > 1) {
    let newList = [];

    for (let i = 0; i <= lists.length; i += 2) {
      let list1 = lists[i] ?? null;
      let list2 = lists[i + 1] ?? null;

      newList.push(mergeTwoLists(list1, list2));

      lists = newList;
    }
  }

  return lists[0] ?? null;
}
