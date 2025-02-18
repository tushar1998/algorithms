/**
 *  Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
    Output: 6
    Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * @param nums 
 * @returns 
 */
export function maxSubArraySum(nums: Array<number>): number {
  let sum = 0;
  let maxSub = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (sum < 0) {
      sum = 0;
    }

    sum += nums[i];
    maxSub = Math.max(maxSub, sum);
  }

  return maxSub;
}
