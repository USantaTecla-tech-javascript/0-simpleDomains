const { Console } = require("./console");

const console = new Console();
let decimalNumber = +console.readNumber("Dame un numero? ")
const SIZE_BITS = 32
let binaryNumber = "";
for(let i=0; i<SIZE_BITS; i++){
	binaryNumber = (decimalNumber & 1) + binaryNumber;
  decimalNumber >>= 1;
}
console.writeln(binaryNumber);
