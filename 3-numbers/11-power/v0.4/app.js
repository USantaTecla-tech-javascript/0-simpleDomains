const { Console } = require("./console");

const console = new Console();
const base = console.readInt("Dame una base: ");
const exponent = console.readInt("Dame un exponente: ");
console.writeln(`La base ${base} elevada al exponente ${exponent} es ${power(base, exponent)}`);

function power(base, exponent){
  return exponent < 0 ?
    1/power(base, -exponent)
  : exponent === 0 ?
    1
  :
    power(base, exponent);
}
