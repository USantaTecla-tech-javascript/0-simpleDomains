const { Console } = require("./console");

const console = new Console();
let number = console.readNumber(`Dame un número decimal: `);
let binary = "";
for(let i=0; i<32; i++){
  binary = (number & 1) + binary;
  if ((i+1) % 4 == 0){
    binary = " " + binary;
  }
  number >>= 1;
}
console.writeln(`Formato binario: ${binary}`);
