let number = +prompt("Dame un número entero");
let ones = number % 10;
console.log("Unidades: " + ones + "\n");
number = number / 10;
let tens = number % 10;
console.log("Decenas: " + tens + "\n");
number = number / 10;
let hundreds = number % 10;
console.log("Centenas: " + hundreds + "\n");
