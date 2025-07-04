const fibonacci = (n: number): number => {
  if (n >= 1) return n * fibonacci(n - 1);

  return 1;
};

let result = fibonacci(4);

console.log(`The result of the Fibonacci function is: ${result}`);

// A river 11 feet wide with 10 stones inside it, -0-0-0-0-0-0-0-0-0-0- a frog needs to cross the river how many ways the frog can go from one side to other. A frog can hop 1 or 2 stones at a time.

// -0- Ways: 2
// -0-0- Ways: 3
// -0-0-0- Ways: 5
const frogWays = (n: number): number => {
  if (n <= 1) return 1;

  return frogWays(n - 1) + frogWays(n - 2);
};

console.log(frogWays(10));
