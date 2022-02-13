const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
let parity = "impar";
if (number % 2 === 0) //{
  parity = "par";
//} 
console.writeln(`El numero ${number} es ${parity}`);
