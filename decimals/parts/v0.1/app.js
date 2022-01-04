const { Console } = require("./console");

const console = new Console();
let amount = +console.readInt("Dame una cantidad de elementos: ");
console.writeln("La cantidad " + amount + " tiene " 
  + (amount - amount % 1) + " como parte entera " 
  + (amount % 1) + " como parte decimal.");
