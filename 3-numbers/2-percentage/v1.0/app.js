const { Console } = require("./console");

const console = new Console();
const percentage = console.readNumber(`Dame el tanto por ciento (sin %): `) ;
console.writeln(`${percentage}% = ${percentage} · 1 / 100 = ${percentage} · 0,01 = ${percentage/100}`);
let amount;
do {
  amount = console.readNumber("Dame la cantidad (0 para terminar): ");
  if (amount !== 0){
    console.writeln(`${percentage}% · ${amount} = ${amount * percentage / 100}`);
  }
} while (amount !== 0);
