let elementsAmount = +prompt("Dame una cantidad de elementos: ");
let groupSize = +prompt("Dame el tamaño de los grupos: ");

let remainderDivision = elementsAmount % groupSize
let integerDivision = elementsAmount - remainderDivision
console.log("La cantidad de " + elementsAmount + " elementos agrupados de " 
  + groupSize + " en " + groupSize + " elementos, desprende " 
  + integerDivision + " grupos y sobran " 
  + remainderDivision + " elementos.");
  