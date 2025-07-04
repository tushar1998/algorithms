function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  const max = Math.max(...candies);
  let result: Array<boolean> = [];

  for (let i of candies) {
    if (i + extraCandies < max) {
      result.push(false);
    } else {
      result.push(true);
    }

    console.log({ result });
  }

  return result;
}

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
