/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let l = 0;
  let r = 0;

  for (let r = 0; r < nums.length; r++) {
    if (nums[r] !== 0) {
      // Swapping the elements
      const numsl = nums[l];
      nums[l] = nums[r]!;

      nums[r] = numsl!;
      l++;
    }
  }
}

moveZeroes([0, 1, 0, 3, 12]);
