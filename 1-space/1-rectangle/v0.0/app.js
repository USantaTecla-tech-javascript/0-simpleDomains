const { Console } = require("./console");

const console = new Console();
const width = console.readNumber("Dame el ancho del rectangulo: ");
const height = console.readNumber("Dame el alto del rectangulo: ");
const perimeter = 2 * (width + height);
const area = width * height;
console.writeln(`Perímetro: ${perimeter}
Área: ${area}`);
  