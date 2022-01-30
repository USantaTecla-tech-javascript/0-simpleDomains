const { Console } = require("./console");

const console = new Console();
const side = console.readNumber("Dame el lado del cuadrado: ");
const SIDES = 4;
console.writeln(`Perímetro: ${side * SIDES}
Area: ${side ** 2}`);