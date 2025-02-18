import { ListNode } from "./helpers/list-node";

/**
 * Merges two sorted linked lists into a single sorted linked list.
 *
 * @param list1 - The first sorted linked list.
 * @param list2 - The second sorted linked list.
 * @returns The head of the merged sorted linked list.
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let list3 = new ListNode();
  let current = list3;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }

    current = current.next;
  }

  if (list1 !== null) {
    current.next = list1;
  } else if (list2 !== null) {
    current.next = list2;
  }

  return list3.next;
}
