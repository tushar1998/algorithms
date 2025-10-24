const ord = (char: string) => char.charCodeAt(0)

function findTheLongestSubstring(s: string): number {
  const vowels = "aeiou"

  const map = new Map<number, number>();
  map.set(0, -1);
  let mask = 0;
  let res = 0;

  for (let i = 0; i < s.length; i++) {
    const c = s[i]!
    const idx = vowels.indexOf(c);
    if (idx !== -1) mask ^= 1 << idx;

    if (map.has(mask)) {
      res = Math.max(res, i - map.get(mask)!);
    } else {
      map.set(mask, i);
    }
  }

  return res;
};

console.log(findTheLongestSubstring("eleetminicoworoep"))
console.log(findTheLongestSubstring("leetcodeisgreat"))
