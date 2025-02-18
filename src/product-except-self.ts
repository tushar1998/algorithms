export function productExceptSelf(nums: number[]): number[] {
  const result: Array<number> = [...Array(nums.length)].fill(1);

  let lProduct = 1;
  let RProduct = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = lProduct;
    lProduct *= nums[i];
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= RProduct;
    RProduct *= nums[i];
  }

  return result;
}

// [1,2,3,4]
