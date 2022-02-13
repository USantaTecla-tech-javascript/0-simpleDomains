const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Dame un número (0-20): ");
let factorial = 1;
for (let i = 1; i <= number; i++) //{
  factorial *= i;
//}
console.writeln(`El factorial de ${number} es ${factorial}`);
