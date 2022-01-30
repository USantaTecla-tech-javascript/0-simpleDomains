const { Console } = require("./console");

const console = new Console();
const number = console.readNumber("Escribe un número? ");
console.writeln(`El valor absoluto del número ${number} es ${getAbsolute(number)}`);

function getAbsolute(number){
  return (number < 0 ? -1 : 1) * number;
}