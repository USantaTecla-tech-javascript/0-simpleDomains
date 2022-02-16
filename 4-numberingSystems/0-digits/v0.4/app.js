const { Console } = require("./console");

const console = new Console();
let number = console.readNumber(`Dame un número entero: `);
let DIGITS = [`Unidades`, `Decenas`, `Centenas`];
for (let i = 0; i < DIGITS.length; i++) {
  console.writeln(`${DIGITS[i]}: ${getRightDigit(number, i)}`);
}

function getRightDigit(number, position) {
  if (position === 0) {
    return number % 10;
  }
  return getRightDigit((number - number % 10) / 10, position - 1);
}
