const { Console } = require("./console");

const console = new Console();
let number = console.readInt(`Dame un número entero: `);
let DIGITS = [`Unidades`, `Decenas`, `Centenas`];
for (let i = 0; i < DIGITS.length; i++) {
  console.writeln(`${DIGITS[i]}: ${getRightDigit(number, i + 1)}\n`);
}

function getRightDigit(number, position) {
  return position === 1?
    number % 10
  :
    getRightDigit(number / 10, position - 1);
}
