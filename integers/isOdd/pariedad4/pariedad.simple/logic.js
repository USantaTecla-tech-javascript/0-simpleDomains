let number = +prompt("Escribe un número? ");
let parity = "impar";
if (number % 2 == 0) {
  parity = "par";
} 
console.log("El numero " + number + " es " + parity);
