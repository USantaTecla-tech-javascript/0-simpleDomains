const { Console } = require("./console");

const console = new Console();
let height = console.readInt("Dame el lado del rectangulo: ");
let width = console.readInt("Dame el lado del rectangulo: ");
console.writeln(
  "Perímetro: " + (2 * (height + width)) + "\n"
  + "Area: " + (height * width));
  