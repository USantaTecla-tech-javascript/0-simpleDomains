const { Console } = require("./console");

const console = new Console();
const radio = console.readInt("Dame el radio del círculo: ")
console.writeln("Perímetro: " + (2 * 3.141592 * radio) + "\n"
  + "Area: " + (3.141592 * radio ** 2))
