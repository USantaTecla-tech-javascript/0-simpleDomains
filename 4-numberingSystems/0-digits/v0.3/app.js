const { Console } = require("./console");

const console = new Console();
let number = console.readInt(`Dame un número entero: `);
const DIGITS = ["Unidades", "Decenas", "Centenas"];
for(let i=0; i<3; i++){
  console.writeln(`${DIGITS[i]}: ${number % 10}\n`);
  number /= 10;
}
