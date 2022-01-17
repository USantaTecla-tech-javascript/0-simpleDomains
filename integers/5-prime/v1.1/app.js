const { Console } = require("./console");

const console = new Console();

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

function sumPrimes(amount){
  let sum = 0;
  for (let i = 1; i <= amount; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

let amount = console.readInt(`Dame un número positivo: `);
console.writeln(`La suma de los primos en los primeros ${amount} números es ${sumPrimes(amount)}`);
