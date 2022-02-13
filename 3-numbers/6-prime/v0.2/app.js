const { Console } = require("./console");

const console = new Console();
let number = console.readNumber("Dame un número: ");
console.writeln(`El número ${number} ${isPrime(number) ? `si` : `no`} es primo`);

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  let next = 2;
  while (number % next != 0) {
    next++;
  }
  return number == next;
}