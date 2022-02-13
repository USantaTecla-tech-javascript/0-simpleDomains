const { Console } = require("./console");

const console = new Console();
let number = console.readNumber(`Dame un número entero: `);
let ones = number % 10;
number = number / 10;
let tens = number % 10;
number = number / 10;
let hundreds = number % 10;
console.writeln(`Unidades: ${ones}\n`);
console.writeln(`Decenas: ${tens}\n`);
console.writeln(`Centenas: ${hundreds}\n`);
