const { Console } = require("./console");

const console = new Console();
const number = console.readNumber(`Dame un número entero: `);
let remainder = number;
let digits = 0;
while (remainder > 0) {
  remainder -= remainder % 10;
  remainder /= 10;
  digits++;
}
if (digits === 0) {
  digits++;
}
console.writeln(`El número ${number} tiene ${digits} digito${digits != 1 ? `s` : ``}.`);
