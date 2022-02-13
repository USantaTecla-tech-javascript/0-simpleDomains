const { Console } = require("./console");

const console = new Console();
const percentage = console.readNumber(`Dame el tanto por ciento (sin %): `) ;
console.writeln(`${percentage}% = ${percentage} x 1 / 100 = ${percentage} x 0.01 = ${percentage/100}`);
const amount = console.readNumber("Dame la cantidad: ");
console.writeln(`${percentage}% x ${amount} = ${amount * percentage / 100}`);
