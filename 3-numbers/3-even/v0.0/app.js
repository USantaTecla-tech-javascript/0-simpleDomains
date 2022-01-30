const { Console } = require("./console");

const console = new Console();
let number = console.readNumber("Escribe un número? ");
let parity = (number & 1) == 0 ? "par" : "impar";
console.writeln(`El numero ${number} es ${parity}`);
