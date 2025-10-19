function numSubarraysWithSum(nums: number[], goal: number): number {
  let sum = 0;
  const map = new Map<number, number>();

  let res = 0;
  map.set(0, 1);

  for (let n of nums) {
    sum += n;
    const diff = sum - goal;

    res += map.get(diff) ?? 0;

    map.set(sum, 1 + (map.get(sum) ?? 0));
  }

  return res;
}

console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
