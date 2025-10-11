class NumMatrix {
  private prefixMatrix: number[][] = [];

  constructor(matrix: number[][]) {
    const rows = matrix.length,
      columns = matrix[0]?.length ?? 0;

    this.prefixMatrix = Array.from({ length: rows }, () => Array(columns).fill(0));

    for (let r = 0; r < rows; r++) {
      let prefix = 0;
      for (let c = 0; c < columns; c++) {
        prefix += matrix[r]?.[c] ?? 0;
        if (r === 0) this.prefixMatrix[r][c] = prefix;
        else this.prefixMatrix[r][c] = this.prefixMatrix[r - 1][c] + prefix;
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    console.log(this.prefixMatrix);

    const bottomRight = this.prefixMatrix[row2]?.[col2] ?? 0;
    const top = this.prefixMatrix[row1 - 1]?.[col2] ?? 0;

    const topLeft = this.prefixMatrix[row1 - 1]?.[col1 - 1] ?? 0;

    const left = this.prefixMatrix[row2]?.[col1 - 1] ?? 0;
    return bottomRight - top - left + topLeft;
  }
}

/**
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */

const numMatrix = new NumMatrix([
  [3, 0, 1, 4, 2],
  [5, 6, 3, 2, 1],
  [1, 2, 0, 1, 5],
  [4, 1, 0, 1, 7],
  [1, 0, 3, 0, 5],
]);

console.log(numMatrix.sumRegion(2, 1, 4, 3)); // return 8 (i.e sum of the red rectangle)
// console.log(numMatrix.sumRegion(1, 1, 2, 2)); // return 11 (i.e sum of the green rectangle)
// console.log(numMatrix.sumRegion(1, 2, 2, 4)); // return 12 (i.e sum of the blue rectangle)

/**
 * [
 *  [3, 3, 4, 8, 10],
 *  [8, 14, 18, 24, 27],
 *  [9, 17, 21, 28, 36],
 *  [13, 22, 26, 34, 49],
 *  [14, 23, 30, 38, 58]
 * ]
 */
