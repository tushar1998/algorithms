function pivotIndex(nums: number[]): number {
  let curr = 0;
  const prefix = [];

  for (const i of nums) {
    curr = curr + i;

    prefix.push(curr);
  }

  for (let n = 0; n <= prefix.length - 1; n++) {
    // 0 - (n-1)
    let leftSum = prefix[n - 1] ?? 0;

    // (n+1) - (length - 1)
    let rightSum = prefix[prefix.length - 1]! - prefix[n]!;

    if (leftSum === rightSum) {
      return n;
    }
  }

  return -1;
}

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
console.log(pivotIndex([1, 2, 3]));
console.log(pivotIndex([2, 1, -1]));
