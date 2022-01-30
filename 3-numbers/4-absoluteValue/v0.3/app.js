const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
let absolute = number;
if (number < 0){
  absolute *= -1;
}
console.writeln(`El valor absoluto del número ${number} es ${absolute}`);