// 209. Minimum Size Subarray Sum
function minSubArrayLen(target: number, nums: number[]): number {
  let minLengthSubarray = nums.length + 1;
  let L = 0;

  let sum = 0;

  for (let i = 0; i <= nums.length - 1; i++) {
    sum = sum + nums[i]!;

    while (sum >= target) {
      minLengthSubarray = Math.min(minLengthSubarray, i - L + 1);
      sum = sum - nums[L]!;

      L += 1;
    }
  }

  if (minLengthSubarray === nums.length + 1) return 0;

  return minLengthSubarray;
}

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
