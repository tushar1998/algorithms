class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const tree = new Node(2);
tree.left = new Node(3);
tree.right = new Node(4);
tree.left.left = new Node(5);
tree.left.right = new Node(6);

function findSum(head: Node | null): number {
  if (head === null) return 0;

  return head.value + findSum(head.left) + findSum(head.right);
}

console.log(`The sum of all nodes in the tree is: ${findSum(tree)}`);
