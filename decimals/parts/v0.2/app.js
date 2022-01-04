const { Console } = require("./console");

const console = new Console();
function getIntegerDivision(amount) {
  return amount - getRemainderDivision(amount);
}

function getRemainderDivision(amount){
  return amount % 1;
}

let amount = +console.readInt("Dame una cantidad de elementos: ");
console.writeln("La cantidad " + amount + " tiene " 
  + getIntegerDivision(amount) + " como parte entera " 
  + getRemainderDivision(amount) + " como parte decimal.");