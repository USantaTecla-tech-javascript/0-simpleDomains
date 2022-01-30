const { Console } = require("./console");

const console = new Console();
let position = console.readNumber("Dame una posición: ");
console.writeln(`El término de la serie de Fibonacci de ${position} es ${fibonacci(position)}`);

function fibonacci(position) {
  if (fibonacci[1] === undefined){
    fibonacci[1] = 1;
    fibonacci[2] = 1;
  }
  if (fibonacci[position] !== undefined) {
    return fibonacci[position];
  }
  if (fibonacci[position-1] === undefined) {
    fibonacci[position-1] = fibonacci(position -1);
  }
  fibonacci[position] = fibonacci[position-1] + fibonacci[position-2];
  return fibonacci[position];
}