const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Escribe un número? ");
let parity;
if (number % 2 == 0) {
  parity = "par";
} else {
  parity = "impar";
}
console.writeln("El numero " + number + " es " + parity);
