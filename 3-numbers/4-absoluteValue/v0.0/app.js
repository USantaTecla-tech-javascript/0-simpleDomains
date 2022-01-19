const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Escribe un número? ");
const sign = number < 0 ? -1 : 1;
const absolute = number * sign;
console.writeln(`El valor absoluto del número ${number} es ${absolute}`);
