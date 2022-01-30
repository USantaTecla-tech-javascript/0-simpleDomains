const { Console } = require("./console");

const console = new Console();
let number = console.readNumber("Introduce un número: ");
console.writeln(`El número ${number} ${isPalindrome(number) ? `sí` : `no`} es palidromo`);

function getInverse(number) {
  let inverse = 0;
  do {
    inverse *= 10;
    inverse += number % 10;
    number -= number % 10;
    number /= 10;
  } while (number > 0);
  return inverse;
}

function isPalindrome(number) {
  return number === getInverse(number);
}