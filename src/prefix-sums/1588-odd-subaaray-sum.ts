function sumOddLengthSubarrays(arr: number[]): number {
  const prefixAaray: Array<number> = [];

  let curr = 0;
  for (const i of arr) {
    curr += i;
    prefixAaray.push(curr);
  }

  let sum = 0;
  for (let i = 0; i < prefixAaray.length; i++) {
    for (let j = i; j < prefixAaray.length; j++) {
      if ((j - i + 1) % 2 === 1) {
        const valJ = prefixAaray[j];
        const valI = prefixAaray[i - 1] ?? 0;
        sum += valJ! - valI;
      }
    }
  }

  return sum;
}

// const sumOddLengthSubarrays = (arr: number[]) =>
//     arr.reduce((res, num, left) => {
//         const right = arr.length - left - 1;
//         return res +
//             num * ((left >> 1) + 1) * ((right >> 1) + 1) +
//             num * ((left + 1) >> 1) * ((right + 1) >> 1);
//     }, 0);

console.time("execution");
console.log(sumOddLengthSubarrays([1, 4, 2, 5, 3]));
console.timeEnd("execution");
