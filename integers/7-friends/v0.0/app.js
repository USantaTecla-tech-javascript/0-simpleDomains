const { Console } = require("./console");

const console = new Console();
let number1 = console.readInt("Dame un número: ");
let sum1 = 0;
for (let i = 1; i < number1; i++) {
  if (number % i == 0) {
    sum1 += i;
  }
}
let number2 = console.readInt("Dame otro número: ");
let sum2 = 0;
for (let i = 1; i < number1; i++) {
  if (number % i == 0) {
    sum2 += i;
  }
}
const answer = number1 == sum2 && number2 == sum1 ? "SI" : "NO";
console.writeln("Los números " + number1 + " y " + number2 + " " + answer + " son mumeros amigos");
