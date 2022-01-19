const { Console } = require("./console");

const console = new Console();
const age = console.readInt("Qué años tienes? ");
const AGE_MAJORITY = 18;
const isAdult = age >= AGE_MAJORITY;
console.writeln(`${isAdult? `Sí` : `No`} eres mayor de edad`);
