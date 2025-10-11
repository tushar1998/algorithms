function subarraySum(nums: number[], k: number): number {
  let currSum = 0;
  let res = 0;

  const map = new Map<number, number>();
  map.set(0, 1);

  for (let i of nums) {
    currSum += i;
    let diff = currSum - k;

    res += map.get(diff) ?? 0;
    map.set(currSum, 1 + (map.get(currSum) ?? 0));
  }

  return res;
}

console.log(subarraySum([1, 1, 1], 2));
console.log(subarraySum([1, 2, 3], 3));
