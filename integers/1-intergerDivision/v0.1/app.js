const { Console } = require("./console");

const console = new Console();
const divider = console.readInt("Dame el divisor: ");
for(let i=1; i<=100; i++){
  const remainder = i % divider;
  const integer = i - remainder;
  const quotient = integer / divider;
  console.writeln(i + " / " + divider + " = " + quotient + " y sobran " + remainder);
}
