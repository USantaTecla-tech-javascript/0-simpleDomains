const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial(number)}`);

function factorial(number) {

  function accFactorial(number, acc) {
    return number < 1 ?
      acc
      :
      accFactorial(number - 1, acc * number);
  }

  return accFactorial(number, 1);
}
