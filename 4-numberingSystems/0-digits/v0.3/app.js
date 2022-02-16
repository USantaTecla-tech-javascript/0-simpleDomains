const { Console } = require("./console");

const console = new Console();
let number = console.readNumber(`Dame un número entero: `);
let DIGITS = [`Unidades`, `Decenas`, `Centenas`];
for (let i = 0; i < DIGITS.length; i++) {
  console.writeln(`${DIGITS[i]}: ${getRightDigit(number, i)}`);
}

function getRightDigit(number, position) {
  while (position > 0) {
    number -= number % 10;
    number /= 10;
    position--;
  }
  return number % 10;
}