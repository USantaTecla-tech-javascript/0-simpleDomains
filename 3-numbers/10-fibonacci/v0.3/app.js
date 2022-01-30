const { Console } = require("./console");

const console = new Console();
let position = console.readNumber("Dame una posición: ");
console.writeln(`El término de la serie de Fibonacci de ${position} es ${fibonacci(position)}`);

function fibonacci(position) {
  return position <= 2 ?
    1
  :
    fibonacci(position - 1) + fibonacci(position - 2);
}