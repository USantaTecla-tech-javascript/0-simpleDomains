const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
console.writeln(`El numero ${number} es ${number % 2 === 0 ? "par" : "impar"}`);
