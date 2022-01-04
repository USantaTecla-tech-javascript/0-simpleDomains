const { Console } = require("./console");

const console = new Console();
let elementsAmount = +console.readInt("Dame una cantidad de elementos: ");
let groupSize = +console.readInt("Dame el tamaño de los grupos: ");

let remainderDivision = elementsAmount % groupSize
let integerDivision = elementsAmount - remainderDivision
console.writeln("La cantidad de " + elementsAmount + " elementos agrupados de " 
  + groupSize + " en " + groupSize + " elementos, desprende " 
  + integerDivision + " grupos y sobran " 
  + remainderDivision + " elementos.");
  