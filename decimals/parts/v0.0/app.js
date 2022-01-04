const { Console } = require("./console");

const console = new Console();
let amount = +console.readInt("Dame una cantidad de elementos: ");
let remainderDivision = amount % 1;
let integerDivision = amount - remainderDivision;
console.writeln("La cantidad " + amount + " tiene " 
  + integerDivision + " como parte entera " 
  + remainderDivision + " como parte decimal.");
