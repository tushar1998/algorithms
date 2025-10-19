function checkSubarraySum(nums: number[], k: number): boolean {
  let sum = 0;

  const sumMap = new Map<number, number>(); // remainder -> index

  sumMap.set(0, -1);

  for (const [i, n] of nums.entries()) {
    sum += n;

    let remainder = ((sum % k) + k) % k;

    if (!sumMap.has(remainder)) {
      sumMap.set(remainder, i);
    } else if (i - (sumMap.get(remainder) ?? 0) >= 2) {
      return true;
    }
  }

  return false;
}

console.log(checkSubarraySum([23, 2, 6, 4, 7], 13));
