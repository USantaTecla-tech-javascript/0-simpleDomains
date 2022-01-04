const { Console } = require("./console");

const console = new Console();
function getInverse(number) {
  let result = 0;
  do {
    result = result * 10 + number % 10;
    number = parseInt(number / 10);
  } while (number > 0);
  return result;
}

function isPalindrome(number) {
  return number == getInverse(number);
}

let number = +console.readInt("Introduce un número: ");
const answer = isPalindrome(number) ? "SI" : "NO";
console.writeln("El numero " + number + " " + answer + " es palidromo");
