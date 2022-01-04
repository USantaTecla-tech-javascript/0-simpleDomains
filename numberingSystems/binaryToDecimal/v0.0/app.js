const { Console } = require("./console");

const console = new Console();
function toDecimal(binary) {
  let decimal = 0;
  let power = 1;
  do {
    decimal += (binary % 10) * power;
    power = power * 2;
    binary = parseInt(binary / 10);
  } while (binary > 0);
  return decimal;
}

let binary = 1000;
console.writeln("El número " + binary
  + " binario corresponde con el número "
  + toDecimal(binary) + " decimal");
