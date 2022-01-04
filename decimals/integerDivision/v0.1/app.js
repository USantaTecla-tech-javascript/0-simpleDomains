const { Console } = require("./console");

const console = new Console();
function getIntegerDivision(dividend, divisor) {
  return dividend - getRemainderDivision(dividend, divisor);
}

function getRemainderDivision(dividend, divisor){
  return dividend % divisor;
}

let elementsAmount = +console.readInt("Dame una cantidad de elementos: ");
let groupSize = +console.readInt("Dame el tamaño de los grupos: ");
console.writeln("La cantidad de " + elementsAmount + " elementos agrupados de " 
  + groupSize + " en " + groupSize + " elementos, desprende " 
  + getIntegerDivision(elementsAmount, groupSize) + " grupos y sobran " 
  + getRemainderDivision(elementsAmount, groupSize) + " elementos.");