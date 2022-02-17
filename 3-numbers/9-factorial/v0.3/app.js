const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial(number)}`);

function factorial(number){
  return number <= 1 ?
    1
  :
    number * factorial(number-1);
}
