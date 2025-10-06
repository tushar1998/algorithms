function minWindow(s: string, t: string): string {
  if (t === "") return "";

  let L = 0;
  let res = s.length + 2;
  let resPointers = [-1, -1];

  let countS = new Map<string, number>();
  let countT = new Map<string, number>();

  for (let i of t) {
    countT.set(i, 1 + (countT.get(i) ?? 0));
  }

  let have = 0;
  let need = countT.size;

  for (let R = 0; R <= s.length - 1; R++) {
    countS.set(s[R]!, 1 + (countS.get(s[R]!) ?? 0));
    
    if (countT.has(s[R]!) && countS.get(s[R]!) === countT.get(s[R]!)) {
      have += 1;
    }

    while (have === need) {
      if (R - L + 1 < res) {
        res = R - L + 1;
        resPointers = [L, R];
      }
      countS.set(s[L]!, countS.get(s[L]!)! - 1);

      if (countT.has(s[L]!) && countS.get(s[L]!)! < countT.get(s[L]!)!) {
        have -= 1;
      }

      L += 1;
    }
  }

  if (res !== s.length + 2) {
    return s.slice(resPointers[0], resPointers[1]! + 1);
  }

  return "";
}

// console.log(minWindow("ADOBECODEBANC", "ABC"));
console.log(minWindow("aa", "aa"));

// console.log("ABCNS".slice(1, 2))
