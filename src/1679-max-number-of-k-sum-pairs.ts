function maxOperations(nums: number[], k: number): number {
  let i = 0;
  let j = nums.length;
  let count = 0;

  while (i < j) {
    const sum = nums[i]! + nums[j]!;

    if (sum === k) {
      //   nums.splice(j, 1);
      //   nums.splice(i, 1);
      i++;

      j--;

      count++;
    } else if (sum < k) {
      i++;
    } else {
      j--;
    }
  }

  return count;
}

console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
console.log(maxOperations([1, 2, 3, 4, 3, 2, 1], 6)); // 3

// Edge cases
console.log(maxOperations([], 5)); // 0
console.log(maxOperations([1, 2, 3], 7)); // 0
console.log(maxOperations([1, 2, 3, 4, 5], 10)); // 2
console.log(maxOperations([1, 1, 1, 1], 2)); // 2


