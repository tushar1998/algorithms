function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  let l1 = str1.length;
  let l2 = str2.length;

  while (l2 !== 0) {
    const temp = l2;
    l2 = l1 % l2;

    l1 = temp;
  }

  return str1.substring(0, l1);
}

console.log(gcdOfStrings("ABCABC", "ABC")); // "ABC"
console.log(gcdOfStrings("ABABAB", "ABAB")); // "ABAB"
console.log(gcdOfStrings("LEET", "CODE")); // ""
console.log(gcdOfStrings("ABABABAB", "ABAB")); // "ABAB"
