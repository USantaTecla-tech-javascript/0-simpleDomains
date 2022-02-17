const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial(number)}`);

function factorial(number){
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result *= i;
  }
  return result;  
}
