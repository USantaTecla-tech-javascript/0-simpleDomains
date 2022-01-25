const { Console } = require("./console");

const console = new Console();
const base = console.readInt("Dame una base: ");
const exponent = console.readInt("Dame un exponente: ");
console.writeln(`La base ${base} elevada al exponente ${exponent} es ${power(base, exponent)}`);

function power(base, exponent){
  let inverse = exponent < 0;
  if (inverse) {
    exponent *= -1;
  }
  let power = 1;
  for (let i = 0; i < exponent; i++) {
    power *= base;
  }
  if (inverse){
    power = 1/power;
    exponent *= -1;
  }
  return power;
}