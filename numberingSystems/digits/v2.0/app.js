const { Console } = require("./console");

const console = new Console();
function getRightDigit(number, position){
  for(let i=0; i<position-1; i++){
    number = parseInt(number/10);
  }
  return number%10;
}

let number = +console.readInt("Dame un número entero");

let DIGITS = ["Unidades", "Decenas", "Centenas"];
for(let i=0; i<DIGITS.length; i++){
  console.writeln(DIGITS[i] + ":" + getRightDigit(number, i+1) + "\n");
}
