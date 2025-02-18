/**
 *
 * @param nums [2,-2]
 * @returns
 */
export function maxProduct(nums: number[]): number {
  let result = Math.max(...nums);

  let maxProd = 1;
  let minProd = 1;

  for (let i = 0; i < nums.length; i++) {
    let tmp = nums[i] * maxProd;

    maxProd = Math.max(nums[i] * maxProd, nums[i] * minProd, nums[i]);
    minProd = Math.min(tmp, nums[i] * minProd, nums[i]);

    result = Math.max(result, maxProd);
  }

  return result;
}
