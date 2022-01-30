const { Console } = require("./console");

const console = new Console();
const side = console.readNumber("Dame el lado del cuadrado: ");
const SIDES = 4;
const perimeter = side * SIDES;
const area = side ** 2;
console.writeln(`Perímetro: ${perimeter}
Area: ${area}`);
