let number = +prompt("Dame un número:")
const msg = "El valor absoluto del número " + number + " es ";
number *= number < 0 ? -1 : 1
console.log(msg + number);
