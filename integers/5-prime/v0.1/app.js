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

let number = console.readInt("Dame un número: ");
console.writeln(`El número ${number} ${isPrime(number) ? `si` : `no`} es primo`);

