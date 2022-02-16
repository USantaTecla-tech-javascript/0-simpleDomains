const { Console } = require("./console");

const console = new Console();
let number = console.readNumber(`Dame un número entero`);
const length = getLength(number);
console.writeln(`El número ${number} tiene ${length} digito${length != 1 ? `s` : ``}.`);

function getLength(number) {
  if (number === 0) {
    return 1;
  }
  let digits = 0;
  while (number > 0) {
    number -= number % 10;
    number /= 10;
    digits++;
  }
  return digits;
}