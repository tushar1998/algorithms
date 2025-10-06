function moveZeroes(nums: number[]): void {
  let L = 0;

  for (let R = 0; R <= nums.length - 1; R++) {
    if (nums[R] !== 0) {
      let tmp = nums[L];
      nums[L] = nums[R]!;
      nums[R] = tmp!;

      L++;
    }
  }

  console.log(nums);
}

moveZeroes([0, 1, 0, 3, 12]);
moveZeroes([0]);

// const arr = [0, 1, 0, 3, 12];
// console.log(arr.splice(2));
// console.log(arr);
