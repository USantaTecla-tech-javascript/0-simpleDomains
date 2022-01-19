const { Console } = require("./console");

const console = new Console();
let number = console.readInt(`Dame un número entero: `);
let DIGITS = [`Unidades`, `Decenas`, `Centenas`];
for (let i = 0; i < DIGITS.length; i++) {
  console.writeln(`${DIGITS[i]}: ${getRightDigit(number, i + 1)}\n`);
}

function getRightDigit(number, position) {
  let integer = number;
  for (let i = 0; i < position - 1; i++) {
    integer -= integer % 10;
    integer /= 10;
  }
  return integer % 10;
}
