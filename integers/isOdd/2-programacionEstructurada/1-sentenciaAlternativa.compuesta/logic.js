let number = +prompt("Escribe un número? ");
let parity;
if (number % 2 == 0) {
  parity = "par";
} else {
  parity = "impar";
}
console.log("El numero " + number + " es " + parity);
