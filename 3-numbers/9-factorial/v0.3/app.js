const { Console } = require("./console");

function factorial(number){
  return number <= 1 ?
    1
  :
    number * factorial(number-1);
}

const console = new Console();
let number = console.readInt("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial(number)}`);
