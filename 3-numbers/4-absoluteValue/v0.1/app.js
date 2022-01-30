const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
const absolute = (number<0 ? -1 : 1) * number;
console.writeln(`El valor absoluto del número ${number} es ${absolute}`);
