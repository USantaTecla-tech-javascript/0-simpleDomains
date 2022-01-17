const { Console } = require("./console");

const console = new Console();
const amount = console.readInt("Dame una cantidad: ");
const divider = console.readInt("Dame el divisor: ");

for (let i = 0; i <= amount; i++) {
  const remainder = i % divider;
  const integer = i - remainder;
  const quotient = integer / divider;
  console.writeln(`${i} / ${divider} + = ${quotient} y sobran ${remainder}`);
}
