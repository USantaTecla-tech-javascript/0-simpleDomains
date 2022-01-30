const { Console } = require("./console");

const console = new Console();
let position = console.readNumber("Dame una posición: ");
let fibonacci = 1;
if (position > 2) {
  let previousPrevious = 1;
  let previous = 1;
  for (let i = 3; i <= position; i++) {
    fibonacci = previous + previousPrevious;
    previousPrevious = previous;
    previous = fibonacci;
  }
}
console.writeln(`El término de la serie de Fibonacci de ${position} es ${fibonacci}`);
