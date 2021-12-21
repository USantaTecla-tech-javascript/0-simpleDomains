let number = +prompt("Escribe un número: ");
const factor = number < 1 ? -1 : 1;
const absolute = number * factor;
console.log("El valor absoluto del número " + number + " es " + absolute);
