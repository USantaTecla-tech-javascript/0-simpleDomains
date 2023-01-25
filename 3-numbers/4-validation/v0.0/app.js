const { Console } = require("./console");

const console = new Console();
const MIN = 1;
const MAX = 10;
const INTERVAL = "[" + MIN + ", "+ MAX +"]";
let input;
let error;
do {
  input = console.readNumber("Dame un valor en el intervalo " + INTERVAL + ": ");
  error = input < MIN || MAX < input;
  if (error) //{
    console.writeln("Error!!! No está dentro del intervalo " + INTERVAL + " ! 8-o");
  //}
} while(error);
console.writeln("Gracias!!! Has escogido el " + input);
