const { Console } = require("./console");

const console = new Console();
let number = console.readInt(`Dame un número entero: `);
const ones = number % 10;
number = number / 10;
const tens = number % 10;
number = number / 10;
const hundreds = number % 10;
console.writeln(`Unidades: ${ones}\n`);
console.writeln(`Decenas: ${tens}\n`);
console.writeln(`Centenas: ${hundreds}\n`);
