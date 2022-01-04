const { Console } = require("./console");

const console = new Console();
function getLength(number){
  let digits = 0;
  while (number > 0){
    number = parseInt(number/10);
    digits++;
  }
  return digits;
}

let number = +console.readInt("Dame un número entero");
console.writeln("El número " + number + " tiene " + getLength(number) + " digits");
