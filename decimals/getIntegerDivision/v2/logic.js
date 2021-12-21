function getIntegerDivision(dividend, divisor) {
  return dividend - getRemainderDivision(dividend, divisor);
}

function getRemainderDivision(dividend, divisor){
  return dividend % divisor;
}

let elementsAmount = +prompt("Dame una cantidad de elementos: ");
let groupSize = +prompt("Dame el tamaño de los grupos: ");
console.log("La cantidad de " + elementsAmount + " elementos agrupados de " 
  + groupSize + " en " + groupSize + " elementos, desprende " 
  + getIntegerDivision(elementsAmount, groupSize) + " grupos y sobran " 
  + getRemainderDivision(elementsAmount, groupSize) + " elementos.");