const { Console } = require("./console");

const console = new Console();
const width = console.readInt("Dame el ancho del rectangulo: ");
const height = console.readInt("Dame el alto del rectangulo: ");
console.writeln(`Perímetro: ${2 * (width + height)}
Area: ${width * height}`);
  