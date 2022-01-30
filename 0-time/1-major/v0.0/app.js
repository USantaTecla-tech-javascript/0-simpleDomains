const { Console } = require("./console");

const console = new Console();
let age = console.readNumber("Qué años tienes? ");
console.writeln(`${age >= 18? `Sí` : `No`} eres mayor de edad`);
