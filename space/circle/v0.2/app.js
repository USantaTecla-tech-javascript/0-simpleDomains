const { Console } = require("./console");

const console = new Console();
const radio = console.readInt("Dame el radio del círculo: ");
const PI = 3.141592;
const perimeter = 2 * PI * radio
const area = PI * radio ** 2 
console.writeln("Perímetro: " + perimeter + "\n"
  + "Area: " + area)
  