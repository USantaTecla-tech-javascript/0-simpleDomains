const { Console } = require("./console");

const console = new Console();
const number1 = console.readNumber("Dame un número: ");
let sum1 = 0;
for (let i = 1; i < number1; i++) {
  if (number1 % i == 0) {
    sum1 += i;
  }
}
const number2 = console.readNumber("Dame otro número: ");
let sum2 = 0;
for (let i = 1; i < number2; i++) {
  if (number2 % i == 0) {
    sum2 += i;
  }
}
console.writeln(`Los números ${number1} y ${number2} ${number1 == sum2 && number2 == sum1 ? `si` : `no`} son amigos`);
