function compress(chars: string[]): number {
  const n = chars.length;

  if (n === 1) {
    return chars.join("").length;
  }

  let i = 0;
  let write = 0;

  while (i < n) {
    let count = 0;
    const currentChar = chars[i]!;

    while (i < n && chars[i] === currentChar) {
      i++;
      count++;
    }
    // Write the current character
    chars[write] = currentChar;

    write++;

    if (count > 1) {
      for (const digit of count.toString()) {
        chars[write] = digit;

        write++;
      }
    }
  }

  return write;
}

console.log(compress(["a"])); // 1
console.log(compress(["a", "a", "b", "b", "c", "c", "c"])); // 6
console.log(compress(["a", "b", "b", "c", "c", "c"])); // 6
console.log(compress(["a", "b", "c", "d", "e", "f"])); // 6

const arr = [1, 2, 3, 4, 5];
let write = 0;

arr[write] = 10;
write++;

console.log(arr); // [10, 2, 3, 4, 5]
