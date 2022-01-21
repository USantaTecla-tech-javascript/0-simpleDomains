const { Console } = require("./console");

const console = new Console();
let number1 = console.readInt("Dame un número: ");
let number2 = console.readInt("Dame otro número: ");
console.writeln(`Los números ${number1} y ${number2} ${areFriends(number1, number2) ? `si` : `no`} son amigos`);

function areFriends(number1, number2) {
  return number1 == sumDivisors(number2)
  && number2 == sumDivisors(number1);
}

function sumDivisors(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
}