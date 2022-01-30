const { Console } = require("./console");

const console = new Console();
const amount = console.readNumber(`Dame un número positivo: `);
let sum = 0;
let number = 1;
let primes = 0;
do {
  let isPrime = false;
  if (number >= 2) {
    let next = 2;
    while (number % next != 0) {
      next++;
    }
    isPrime = number == next;
  }
  if (isPrime) {
    sum += number;
    primes++;
  }
  number++;
} while (primes < amount);
console.writeln(`La suma de los primeros ${amount} primos es ${sum}`);
