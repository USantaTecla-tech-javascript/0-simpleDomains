const { Console } = require("./console");

const console = new Console();
let number = console.readInt("Dame un número: ");
let acum = 0;
for (let i = 1; i < number; i++) {
  if (number % i == 0) {
    acum += i;
  }
}
let answer = number == acum ? "SI" : "NO";
console.writeln("El numero" + " " + number + " " 
  + answer + " es perfecto");
