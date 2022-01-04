const { Console } = require("./console");

const console = new Console();
let number = +console.readInt("Dame un número entero");
let ones = number % 10;
console.writeln("Unidades: " + ones + "\n");
number = number - ones; 
number = number / 10;
let tens = number % 10;
console.writeln("Decenas: " + tens + "\n");
number = number - tens;
number = number / 10;
let hundreds = number % 10;
console.writeln("Centenas: " + hundreds + "\n");
