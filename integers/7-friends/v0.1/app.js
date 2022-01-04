const { Console } = require("./console");

function sumDivisors(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
}

function areFriends(number1, number2) {
  return number1 == sumDivisors(number2)
  && number2 == sumDivisors(number1);
}

const console = new Console();
let number1 = console.readInt("Dame un número: ");
let number2 = console.readInt("Dame otro número: ");
let answer = areFriends(number1, number2) ? "SI" : "NO";
console.writeln("Los números " + number1 + " y " + number2 + " " + answer + " son mumeros amigos");
