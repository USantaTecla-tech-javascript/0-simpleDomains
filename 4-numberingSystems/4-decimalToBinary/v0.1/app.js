const { Console } = require("./console");

const console = new Console();
let x = console.readNumber("Dame un número inferior a 16: ");
let firstRight = x & 1;
x >>= 1;
let secondRight = x & 1;
x >>= 1;
let thirdRight = x & 1;
x >>= 1;
let fourthRight = x & 1;
console.writeln(`Bits: ${firstRight}${secondRight}${thirdRight}${fourthRight}`);
