const { Console } = require("./console");

const console = new Console();
const side = console.readInt("Dame el lado del cuadrado: ");
console.writeln(`Perímetro: ${getPerimeter(side)}
Area: ${getArea(side)}`);

const SIDES = 4;

function getPerimeter(side){
  return side * SIDES;
}

function getArea(side){
  return side ** 2;
}
