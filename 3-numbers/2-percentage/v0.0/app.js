const { Console } = require("./console");

const console = new Console();
const percentage = console.readInt(`Dame el tanto por ciento (sin %): `) ;
console.writeln(`${percentage}% = ${percentage} · 1 / 100 = ${percentage} · 0,01 = ${percentage/100}`);
const amount = console.readInt("Dame la cantidad: ");
console.writeln(`${percentage}% · ${amount} = ${amount * percentage / 100}`);