// Solve by Sliding Window
// function numberOfSubarrays(nums: number[], k: number): number {
//   const helper = (a: number) => {
//     let L = 0;
//     let res = 0;
//     let noOfOdds = 0;

//     for (let [i, n] of nums.entries()) {
//       if (n % 2 === 1) {
//         noOfOdds += 1;
//       }

//       while (noOfOdds > a) {
//         if (nums[L]! % 2 === 1) noOfOdds--;
//         L += 1;
//       }

//       res += i - L + 1;
//     }

//     return res;
//   };

//   return helper(k) - helper(k - 1);
// }

// Solve by Prefix Sums
function numberOfSubarraysPS(nums: number[], k: number): number {
  let currSum = 0;
  let res = 0;
  const map = new Map<number, number>();
  map.set(0, 1);

  for (const n of nums) {
    const even = n % 2;
    if (even) {
      currSum += even;
    }
    let diff = currSum - k;

    res += map.get(diff) ?? 0;
    map.set(currSum, 1 + (map.get(currSum) ?? 0));
  }

  return res;
}

console.log(numberOfSubarraysPS([1, 1, 2, 1, 1], 3));
// console.log(numberOfSubarraysPS([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
console.log(numberOfSubarraysPS([2044, 96397, 50143], 1));
