const { Console } = require("./console");

const console = new Console();
let number = console.readNumber("Introduce un número: ");
let inverse = 0;
  do {
    inverse *= 10;
    inverse += number % 10;
    number -= number % 10;
    number /= 10;
  } while (number > 0);

console.writeln(`El número ${number} ${number === inverse ? `sí` : `no`} es palidromo`);
