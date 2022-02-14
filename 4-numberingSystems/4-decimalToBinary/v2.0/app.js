const { Console } = require("./console");

const console = new Console();

let number = console.readNumber(`Dame un número decimal: `);
console.writeln(`Formato binario de ${number}: ${toBinary(number)}`);
for(let i=1; i<=5; i++){
  console.writeln(`Formato binario de ${number} << ${i} (${number << i}): ${toBinary(number << i)}`);
}
for(let i=1; i<=5; i++){
  console.writeln(`Formato binario de ${number} >> ${i} (${number >> i}): ${toBinary(number >> i)}`);
}
for(let i=1; i<=5; i++){
  console.writeln(`Formato binario de ${number} >>> ${i} (${number >>> i}): ${toBinary(number >>> i)}`);
}

function toBinary(number) {
  const MAX_DIGIT = 32;
  let binary = "";
  for (let i = 0; i < MAX_DIGIT; i++) {
    binary = (number & 1) + binary;
    if ((i + 1) % 4 == 0) {
      binary = " " + binary;
    }
    number >>= 1;
  }
  return binary;
}