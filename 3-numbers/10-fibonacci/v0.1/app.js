const { Console } = require("./console");

const console = new Console();
let position = console.readNumber("Dame una posición: ");
console.writeln(`El término de la serie de Fibonacci de ${position} es ${fibonacci(position)}`);

function fibonacci(position){
  let result = 1;
  if (position > 2) {
    let previousPrevious = 1;
    let previous = 1;
    for (let i = 3; i <= position; i++) {
      result = previous + previousPrevious;
      previousPrevious = previous;
      previous = result;
    }
  }
  return result;
}