let number = +prompt("Dame un número entero");
console.log("Unidades: " + (number % 10) + "\n");
number = number / 10;
console.log("Decenas: " + (number % 10) + "\n");
number = number / 10;
console.log("Centenas: " + (number % 10) + "\n");