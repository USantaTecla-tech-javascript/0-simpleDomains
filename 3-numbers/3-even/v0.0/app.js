const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
const parity = (number & 1) == 0 ? "par" : "impar";
console.writeln(`El numero ${number} es ${parity}`);
