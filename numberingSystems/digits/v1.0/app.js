const { Console } = require("./console");

const console = new Console();
let number = +console.readInt("Dame un número entero");
console.writeln("Unidades: " + (number % 10) + "\n");
number = number / 10;
console.writeln("Decenas: " + (number % 10) + "\n");
number = number / 10;
console.writeln("Centenas: " + (number % 10) + "\n");
let DIGITS = ["Unidades", "Decenas", "Centenas"];
for(let i=0; i<3; i++){
  console.writeln(DIGITS[i] + ":" + (number % 10) + "\n");
  number = number / 10;
}
