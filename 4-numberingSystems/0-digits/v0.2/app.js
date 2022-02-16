const { Console } = require("./console");

const console = new Console();
let number = console.readNumber(`Dame un número entero: `);
const DIGITS = ["Unidades", "Decenas", "Centenas"];
for (let i = 0; i < DIGITS.length; i++) {
  console.writeln(`${DIGITS[i]}: ${number % 10}`);
  number -= number%10;
  number /= 10;
}
