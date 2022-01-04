const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Escribe un número? ");
const parity = number & 1 == 1 ? "impar" : "par";
console.writeln("El numero " + number + " es " + parity);
