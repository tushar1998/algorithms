function productExceptSelf(nums: number[]): number[] {
  let product = 1;
  const arr = [];

  //   0 -> nums.length - 1
  for (let i = 0; i <= nums.length - 1; i++) {
    arr[i] = product;
    product *= nums[i]!;
  }

  product = 1;

  // nums.length - 1 -> 0
  for (let i = nums.length - 1; i >= 0; i--) {
    arr[i] = arr[i]! * product;
    product *= nums[i]!;
  }

  return arr;
}

console.log(productExceptSelf([1, 2, 3, 4]));
// productExceptSelf([-1, 1, 0, -3, 3]);

// const nums = [1, 2, 3, 4];
// console.log(nums[-1]);
