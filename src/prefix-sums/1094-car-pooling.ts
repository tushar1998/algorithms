function carPooling(trips: number[][], capacity: number): boolean {
  const array: Array<number> = [];
  for (let i = 0; i <= trips.length - 1; i++) {
    const n = trips[i]!;

    array[n[1]!]! = n[0]! + (array[n[1]!]! ?? 0);
    array[n[2]!]! = (array[n[2]!]! ?? 0) - n[0]!;
  }

  let passCount = 0;
  for (const n of array) {
    passCount += n ?? 0;

    if (passCount > capacity) return false;
  }

  console.timeEnd("execution");

  return true;
}

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    4,
  ),
); // false

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    5,
  ),
); // true

// Loop
/** i = 1,
 * numOfPassengers = 2
 * check less than capacity
 *  - no -> return false
 *  - yes ->
 * [2, 1, 5]
 */
