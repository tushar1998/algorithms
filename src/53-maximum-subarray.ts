function maxSubArray(nums: number[]): number {
  let maxSum: number = nums[0]!;
  let currentSum: number = 0;

  for (let num of nums) {
    currentSum = Math.max(currentSum, 0);
    currentSum += num;
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubArray([1])); // 1
console.log(maxSubArray([5, 4, -1, 7, 8])); // 23
