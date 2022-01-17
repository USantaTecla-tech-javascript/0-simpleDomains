const { Console } = require("./console");

const console = new Console();
let number = console.readInt(`Dame un número positivo: `);
let isPrime = false;
if (number >= 2) {
  let next = 2;
  while (number % next != 0) {
    next++;
  }
  isPrime = number == next;
}
console.writeln(`El número ${number} ${isPrime ? `si` : `no`} es primo`);
