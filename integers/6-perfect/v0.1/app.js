const { Console } = require("./console");

function isPerfect(number) {
  let acu = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      acu += i;
    }
  }
  return number == acu;
}

const console = new Console();
const number = console.readInt("Dame un número: ");
const answer = number == acum ? "SI" : "NO";
console.writeln("El numero" + " " + number + " " 
  + answer + " es perfecto");