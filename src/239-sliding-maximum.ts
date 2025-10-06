/**
 * Example 1:
 * Input: nums = [1,3,-1,-3,5,3,6,7], k = 3
 * Output: [3,3,5,5,6,7]
 * Explanation:
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 *  1 [3  -1  -3] 5  3  6  7       3
 *  1  3 [-1  -3  5] 3  6  7       5
 *  1  3  -1 [-3  5  3] 6  7       5
 *  1  3  -1  -3 [5  3  6] 7       6
 *  1  3  -1  -3  5 [3  6  7]      7
 *
 * Example 2:
 * Input: nums = [1], k = 1
 * Output: [1]
 *
 */

function maxSlidingWindow(nums: number[], k: number): number[] {
  let L = 0;
  let output: Array<number> = [];
  let q: Array<number> = [];

  for (let i = 0; i < nums.length; i++) {
    while (q.length > 0 && nums[q[q.length - 1]!]! <= nums[i]!) {
      q.pop();
    }

    q.push(i);

    if (L > q[0]!) {
      q.shift();
    }

    if (i + 1 >= k) {
      output.push(nums[q[0]!]!);
      L += 1;
    }
  }

  return output;
}

// console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3));
console.log(maxSlidingWindow([1, -1], 1));

// const q = [1, 2, 4, 5, 6, 7];

// q.pop();
// console.log(q);
// q.shift();
// console.log(q);
// q.unshift(11);
// console.log(q);
// q.push(12);
// console.log(q);
