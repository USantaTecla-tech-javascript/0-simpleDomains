const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial(number)}`);

function factorial(number) {

  function acumFactorial(number, acc) {
    return number < 1 ?
      acc
      :
      acumFactorial(number - 1, acc * number);
  }

  return acumFactorial(number, 1);
}
