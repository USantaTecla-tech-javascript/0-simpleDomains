const { Console } = require("./console");

const console = new Console();
let amount = console.readNumber(`Dame un número positivo: `);
console.writeln(`La suma de los primeros ${amount} primos es ${sumFirstPrimes(amount)}`);

function sumFirstPrimes(amount){
  let sum = 0;
  let number = 1;
  let primes = 0;
  do {
    if (isPrime(number)) {
      sum += number;
      primes++;
    }
    number++;
  } while (primes < amount);
  return sum;
}

function isPrime(number) {
  let result = false;
  if (number >= 2) {
    let next = 2;
    while (number % next != 0) {
      next++;
    }
    result = number === next;
  }
  return result;
}
