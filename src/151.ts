function reverseWords(s: string): string {
  const str = s.trim();

  return str
    .trim()
    .split(" ")
    .reverse()
    .join(" ")
    .trim()
    .replaceAll(/[ ]{2,}/g, " ");
}

console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello  world  "));
console.log(reverseWords("hello"));
