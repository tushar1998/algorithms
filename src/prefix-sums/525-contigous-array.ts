function findMaxLength(nums: number[]): number {
  let zero = 0,
    one = 0,
    sum = 0,
    maxLength = 0;

  const map = new Map<number, number>(); // diff -> index

  for (const [i, n] of nums.entries()) {
    if (n === 1) {
      one += 1;
    } else if (n === 0) {
      zero += 1;
    }

    sum += i;

    if (!map.has(one - zero)) {
      map.set(one - zero, i);
    }

    const idx = map.get(one - zero);
    maxLength = Math.max(maxLength, i - idx!);
  }

  return maxLength;
}

console.log(findMaxLength([0, 1]));
console.log(findMaxLength([0, 1, 0]));
console.log(findMaxLength([0, 1, 1, 1, 1, 1, 0, 0, 0]));
