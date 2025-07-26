/**
 * Simple area calculation between two lines in a container.
 * Two pointer approach to find the maximum area.
 * Time complexity: O(n)
 * Space complexity: O(1)
 * Apply loop two pointers, calculate height and width, and calculate area.
 * Break condition is when left pointer is less than right pointer. else vice versa for right pointer.
 * @param height 
 * @returns 
 */
function maxArea(height: number[]): number {
  let capacity = 0;
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    const width = right - left;
    const minHeight = Math.min(height[left]!, height[right]!);
    const currentArea = width * minHeight;

    capacity = Math.max(capacity, currentArea);

    if (height[left]! < height[right]!) {
      left++;
    } else {
      right--;
    }
  }

  return capacity;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1])); // 1
