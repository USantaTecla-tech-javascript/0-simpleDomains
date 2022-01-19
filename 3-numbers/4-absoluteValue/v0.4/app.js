const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Escribe un número? ");
console.writeln(`El valor absoluto del número ${number} es ${getAbsolute(number)}`);

function getAbsolute(number){
  return (number < 0 ? -1 : 1) * number;
}