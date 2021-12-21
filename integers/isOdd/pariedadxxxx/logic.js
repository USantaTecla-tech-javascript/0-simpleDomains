function isEven(value) {
  return value % 2 == 0;
}

const number = +prompt("Escribe un número: ");
console.log("El " + number + " es " + isEven(value) ? "par" : "impar");

