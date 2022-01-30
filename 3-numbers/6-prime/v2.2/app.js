const { Console } = require("./console");

const console = new Console();
let amount = console.readNumber(`Dame un número positivo: `);
console.writeln(`La suma de los primeros ${amount} primos es ${sumFirstPrimes(amount)}`);

function sumFirsPrimes(amount) {
  let sum = 0;
  let number = 1;
  for (let i = 0; i < amount; i++) {
    while (!isPrime(number)) {
      number++;
    }
    sum += number;
    number++;
  }
  return sum;
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
