const { Console } = require("./console");

const console = new Console();
const side = console.readNumber("Dame el lado del cuadrado: ");
console.writeln(`Perímetro: ${getPerimeter(side)}
Area: ${getArea(side)}`);


function getPerimeter(side){
  const SIDES = 4;
  return side * SIDES;
}

function getArea(side){
  return side ** 2;
}
