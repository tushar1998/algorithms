function numSubarrayProductLessThanK(nums: number[], k: number): number {
  let numberOfWindows = 0;
  let product = 1;

  let L = 0;

  for (let R = 0; R <= nums.length - 1; R++) {
    product = product * nums[R]!;

    while (product >= k && L <= R) {
      product = product / nums[L]!;
      L += 1;
    }

    numberOfWindows = numberOfWindows + (R - L + 1);
  }

  return numberOfWindows;
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 2, 3], 0));

// Hardik Desai
