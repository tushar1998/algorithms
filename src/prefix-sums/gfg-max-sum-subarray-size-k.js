/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
class Solution {
  maxSubarraySum(arr, k) {
    // code here
    let currSum = 0;
    let prefixArray = []
    for (let n of arr) {
      currSum += n;
      prefixArray.push(currSum);
    }

    let maxSum = 0;
    for (let [i, n] of prefixArray.entries()) {
      console.log(prefixArray[i], prefixArray[i - k])
      const windowSum = (prefixArray[i] ?? 0) - (prefixArray[i - k] ?? 0)
      maxSum = Math.max(maxSum, windowSum)
      console.log(windowSum, maxSum)
    }

    return maxSum
  }
}

const sol = new Solution();
console.log(sol.maxSubarraySum([100, 200, 300, 400], 2));
