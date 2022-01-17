const { Console } = require("./console");

const console = new Console();
const dividend = console.readInt("Dame el dividendo: ");
const divider = console.readInt("Dame el divisor: ");
const remainder = dividend % divider;
const integer = dividend - remainder;
const quotient = integer / divider;
console.writeln(`${dividend} / ${divider} + = ${quotient} y sobran ${remainder}`);
