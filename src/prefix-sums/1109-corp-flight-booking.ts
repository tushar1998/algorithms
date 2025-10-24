function corpFlightBookings(bookings: number[][], n: number): number[] {
  const map: Array<number> = new Array(n).fill(0);

  for (let [first, last, seats] of bookings) {
    map[first! - 1]! += seats!;

    if (last! < n) map[last!]! -= seats!;
  }

  /**
   * 10,0,-10,0,0
   * 10,20,-10,-20,0
   * 10,45,-10,-20,0
   */

  console.log(bookings, "\n", map);

  for (let i = 1; i < n; i++) {
    map[i] += map[i - 1]; // prefix accumulation
  }

  return map;
}

console.log(
  corpFlightBookings(
    [
      [1, 2, 10],
      [2, 3, 20],
      [2, 5, 25],
    ],
    5,
  ),
);
