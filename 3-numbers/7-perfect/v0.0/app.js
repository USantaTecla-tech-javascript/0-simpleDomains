const { Console } = require("./console");

const console = new Console();
const number = console.readNumber(`Dame un número positivo: `);
let sum = 0;
for(let i=1; i < number; i++){
  if (number % i === 0){
    sum += i;
  }
}
console.writeln(`El número ${number} ${sum === number ? `si` : `no`} es perfecto`);
