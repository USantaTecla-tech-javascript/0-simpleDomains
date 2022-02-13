const { Console } = require("./console");

const console = new Console();
const divider = console.readNumber(`Dame el divisor: `);
for (let i = 0; i <= amount; i++) {
  const remainder = i % divider;
  const integer = i - remainder;
  const quotient = integer / divider;
  console.writeln(`${i} / ${divider} = ${quotient} y sobran ${remainder}`);
}
