const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Escribe un número? ");
let parity = "impar";
if (isOdd(number)) {
  parity = "par";
} 
console.writeln(`El numero ${number} es ${parity}`);

function isOdd(number){
  return number % 2 === 0;
}
