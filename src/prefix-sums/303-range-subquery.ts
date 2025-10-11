class NumArray {
  prefix: Array<number> = [];

  constructor(nums: number[]) {
    let cur = 0;

    for (let i of nums) {
      cur = cur + i;

      this.prefix.push(cur);
    }
  }

  sumRange(left: number, right: number): number {
    console.log(this.prefix);

    let leftSum = 0;

    return this.prefix[right]! - (this.prefix[left - 1]! ?? 0);
  }
}

console.log(new NumArray([-2, 0, 3, -5, 2, -1]).sumRange(0, 5));
