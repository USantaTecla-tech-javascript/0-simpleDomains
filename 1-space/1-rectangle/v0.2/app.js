const { Console } = require("./console");

const console = new Console();
const width = console.readNumber("Dame el ancho del rectangulo: ");
const height = console.readNumber("Dame el alto del rectangulo: ");
console.writeln(`Perímetro: ${getPerimeter(width, height)}
Area: ${getArea(width, height)}`);

function getPerimeter(width, height){
  return 2 * (width + height);
}

function getArea(width, height){
  return width * height;
}
  