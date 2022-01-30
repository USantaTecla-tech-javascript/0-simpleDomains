const { Console } = require("./console");

function factorial(number){
  let factorial = 1;
  for (let i = 1; i <= number; i++) {
    factorial *= i;
  }
  return factorial;  
}

const console = new Console();
let number = console.readNumber("Dame un número: ");
console.writeln(`El factorial de ${number} es ${factorial}`);
