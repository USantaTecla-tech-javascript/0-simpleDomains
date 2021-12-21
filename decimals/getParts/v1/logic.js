let amount = +prompt("Dame una cantidad de elementos: ");
let remainderDivision = amount % 1;
let integerDivision = amount - remainderDivision;
console.log("La cantidad " + amount + " tiene " 
  + integerDivision + " como parte entera " 
  + remainderDivision + " como parte decimal.");
