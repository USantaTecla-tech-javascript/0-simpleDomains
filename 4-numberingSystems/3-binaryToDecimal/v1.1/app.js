const { Console } = require("./console");

const console = new Console();
let binary = console.readNumber(`Damen un número en binario: `);
console.writeln(`El número ${binary} binario corresponde con el número ${toDecimal(binary)} decimal`);

function toDecimal(binary) {
  let decimal = 0;
  let power = 1;
  do {
    let bit = binary % 10;
    decimal += bit * power;
    binary = (binary - bit) / 10;
    power = power * 2;
  } while (binary > 0);
  return decimal;
}
