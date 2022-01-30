const { Console } = require("./console");

const console = new Console();
let number = console.readInt(`Dame un número entero: `);
let DIGITS = [`Unidades`, `Decenas`, `Centenas`];
for (let i = 0; i < DIGITS.length; i++) {
  console.writeln(`${DIGITS[i]}: ${getRightDigit(number, i + 1)}\n`);
}

function getRightDigit(number, position) {
  if (position === 1){
    return number % 10;
  }
  return getRightDigit(number / 10, position - 1);
}
