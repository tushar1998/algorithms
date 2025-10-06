function characterReplacement(s: string, k: number): number {
  let L = 0;
  const count: Map<string, number> = new Map();

  let res = 0;
  let maxF = 0;

  for (let i = 0; i <= s.length - 1; i++) {
    count.set(s[i]!, 1 + (count.get(s[i]!) ?? 0));
    maxF = Math.max(maxF, count.get(s[i]!) ?? 0);

    while (i - L + 1 - maxF > k) {
      count.set(s[L]!, count.get(s[L]!)! - 1);
      L += 1;
    }

    res = Math.max(i - L + 1, res);
  }

  return res;
}

console.log(characterReplacement("ABAB", 2));
console.log(characterReplacement("AABABBA", 1));

// const map = new Map();

// map.set("1", 2);
// map.set("2", 3);

// console.log(Math.max(...map.values()));
