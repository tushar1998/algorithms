function numberOfSubarrays(nums: number[], k: number): number {
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

console.log(numberOfSubarrays([1, 1, 2, 1, 1], 3));
console.log(numberOfSubarrays([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2));
console.log(numberOfSubarrays([2044, 96397, 50143], 1));