// 345. Reverse Vowels of a String
function reverseVowels(s: string): string {
  const input: Array<string | null> = [...s];

  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const vowelsfromString: Array<string> = [];

  for (let i = 0; i <= input.length - 1; i++) {
    let element = input[i] as string;

    if (vowels.includes(element)) {
      vowelsfromString.unshift(element);

      input[i] = null;
    }
  }

  const resultStringArray = input.map((i) => {
    if (i === null) {
      return vowelsfromString.splice(0, 1)[0];
    }

    return i;
  });

  return resultStringArray.join("");
}

console.log(reverseVowels("IceCreAm"));
console.log(reverseVowels("0P"));
console.log(reverseVowels("a a"));
console.log({ result: reverseVowels(" ") });
