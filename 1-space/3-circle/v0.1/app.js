const { Console } = require("./console");

const console = new Console();
const radio = console.readNumber("Dame el radio del círculo: ")
const PI = 3.141592;
console.writeln(`Perímetro: ${2 * PI * radio}
Area: ${PI * radio ** 2}`);
