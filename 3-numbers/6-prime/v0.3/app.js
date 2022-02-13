const { Console } = require("./console");

const console = new Console();
let number = console.readNumber("Dame un número: ");
console.writeln(`El número ${number} ${isPrime(number) ? `si` : `no`} es primo`);

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