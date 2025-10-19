function subarraysDivByK(nums: number[], k: number): number {
  const map = new Map<number, number>();
  let sum = 0;
  let res = 0;

  map.set(0, 1);

  for (const n of nums) {
    sum += n;

    let remainder = ((sum % k) + k) % k;

    res += map.get(remainder) ?? 0;

    map.set(remainder, 1 + (map.get(remainder) ?? 0));
  }

  return res;
}

// console.log(subarraysDivByK([4, 5, 0, -2, -3, 1], 5));
// console.log(subarraysDivByK([5], 9));
console.log(subarraysDivByK([-1, 2, 9], 2));

console.log(((-1 % 2) + 2) % 2);
