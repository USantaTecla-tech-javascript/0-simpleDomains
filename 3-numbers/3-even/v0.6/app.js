const { Console } = require("./console");

const console = new Console();
const number = console.readInt("Escribe un número? ");
let parity = "impar";
if (isOdd(number)) {
  parity = "par";
}
console.writeln(`El numero ${number} es ${parity}`);

function isOdd(number) {
  if (number === 0) {
    return true;
  }
  if (number === 1) {
    return false;
  }
  return isEven(number - 1);
}

function isEven(number) {
  if (number === 0) {
    return false;
  }
  if (number === 1) {
    return true;
  }
  return isOdd(number - 1);
}