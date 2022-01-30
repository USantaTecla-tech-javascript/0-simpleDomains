const { Console } = require("./console");

const console = new Console();
let position = console.readNumber("Dame una posición: ");
console.writeln(`El término de la serie de Fibonacci de ${position} es ${fibonacci(position)}`);

function fibonacci(position) {
  if (position <= 2) {
    return 1;
  }
  return fibonacci(position - 1) + fibonacci(position - 2);
}