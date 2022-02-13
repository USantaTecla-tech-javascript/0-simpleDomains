const { Console } = require("./console");

const console = new Console();
const dividend = console.readNumber(`Dame el dividendo: `);
const divider = console.readNumber(`Dame el divisor: `);
const remainder = dividend % divider;
console.writeln(`${dividend} / ${divider} = ${(dividend - remainder) / divider} y sobran ${remainder}`);
