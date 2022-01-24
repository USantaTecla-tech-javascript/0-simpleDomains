const { Console } = require("./console");

function factorial(number){
  if (number <= 1)
    return 1;
  return number * factorial(number-1);
}

const console = new Console();
let number = console.readInt("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial(number)}`);
