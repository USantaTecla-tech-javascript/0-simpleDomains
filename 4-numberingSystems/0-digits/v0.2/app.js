const { Console } = require("./console");

const console = new Console();
let number = console.readNumber(`Dame un número entero: `);
console.writeln(`Unidades: ${number % 10}\n`);
number /= 10;
console.writeln(`Decenas: ${number % 10}\n`);
number /= 10;
console.writeln(`Centenas: ${number % 10}\n`);
