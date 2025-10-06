const binarySearch = (arr: Array<number>, n: number): number => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid: number = Math.floor((low + high) / 2);

    if (!arr[mid]) return -1;

    if (n < arr[mid]) {
      high = mid - 1;
    } else if (n > arr[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // 4
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 10)); // -1
