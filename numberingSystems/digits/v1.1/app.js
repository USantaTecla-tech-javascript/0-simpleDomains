const { Console } = require("./console");

const console = new Console();
let number = +console.readInt("Dame un número entero");
let DIGITS = ["Unidades", "Decenas", "Centenas"];
for(let i=0; i<DIGITS.length; i++){
  console.writeln(DIGITS[i] + ":" + (number % 10) + "\n");
  number = number / 10;
}
