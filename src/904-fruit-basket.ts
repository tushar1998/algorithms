function totalFruit(fruits: number[]): number {
  let L = 0;
  const map: Map<number, number> = new Map<number, number>(); // fruitType -> count in basket

  let maxSubArray = 0;
  let res = 0;

  for (let R = 0; R <= fruits.length - 1; R++) {
    map.set(fruits[R]!, 1 + (map.get(fruits[R]!) ?? 0));
    maxSubArray += 1;

    while (map.size > 2) {
      const f: number = fruits[L]!;
      const countOfL = map.get(f);
      map.set(f, countOfL! - 1);
      maxSubArray -= 1;
      L += 1;

      if (map.get(f)! <= 0) {
        map.delete(f);
      }
    }

    res = Math.max(res, maxSubArray);
  }

  return res;
}

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4]));
console.log(totalFruit([0, 1, 2, 2]));
