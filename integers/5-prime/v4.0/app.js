const { Console } = require("./console");

const console = new Console();
let number = +console.readInt("Dame un número: ");
let isPrime = false;
if (number >= 2) {
  let next = 2;
  while (number % next != 0) {
    next++;
  }
  isPrime = number == next;
}
let answer = isPrime ? "SI" : "NO";
console.writeln("El numero " + number + " " + answer + " es primo");
