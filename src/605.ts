function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  flowerbed.unshift(0);
  flowerbed.push(0);

  for (let i = 1; i <= flowerbed.length - 2; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      flowerbed[i] = 1;
      n--;
    }
  }

  return n <= 0;
}

console.log(canPlaceFlowers([1, 0, 0, 0, 1], 1));
console.log(canPlaceFlowers([1, 0, 0, 0, 1], 2));
console.log(canPlaceFlowers([1, 0, 0, 0, 0, 0, 1], 2));

console.log(canPlaceFlowers([0, 0, 1, 0, 1], 1));
