const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial(number)}`);

function factorial(number){
  if (number <= 1)
    return 1;
  return number * factorial(number-1);
}
