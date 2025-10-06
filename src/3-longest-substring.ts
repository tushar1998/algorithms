function lengthOfLongestSubstring(s: string): number {
  let charSet: Set<string> = new Set();

  let L = 0;
  let res = 0;

  for (let R = 0; R < s.length; R++) {
    while (charSet.has(s[R]!)) {
      charSet.delete(s[L]!);
      L = L + 1;
    }

    charSet.add(s[R]!);

    res = Math.max(res, R - L + 1);
  }

  return res;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));

// const map = new Map<number, string>();

// map.set(1, "a");
// map.set(2, "b");
// map.set(3, "c");
// map.set(4, "d");
// map.set(5, "e");

// console.log(map);

// console.log(map);
