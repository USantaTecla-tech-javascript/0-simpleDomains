const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Introduce un número: ");
let digits = number;
let inverse = 0;
  do {
    inverse *= 10;
    const unit = digits % 10; 
    inverse += unit;
    digits -= unit;
    digits /= 10;
  } while (digits > 0);
console.writeln(`El número ${number} ${number === inverse ? `sí` : `no`} es palidromo.`);
