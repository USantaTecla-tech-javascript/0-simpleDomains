const { Console } = require("./console");

const console = new Console();
let number = console.readNumber(`Dame un número entero: `);
const ones = number % 10;
number = number - ones;
number = number / 10;
const tens = number % 10;
number = number - tens;
number = number / 10;
const hundreds = number % 10;
console.writeln(
`Unidades: ${ones}
Decenas: ${tens}
Centenas: ${hundreds}\n`);
