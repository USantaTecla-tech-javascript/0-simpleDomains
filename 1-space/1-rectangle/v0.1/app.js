const { Console } = require("./console");

const console = new Console();
const width = console.readNumber("Dame el ancho del rectangulo: ");
const height = console.readNumber("Dame el alto del rectangulo: ");
console.writeln(`Perímetro: ${2 * (width + height)}
Area: ${width * height}`);
  