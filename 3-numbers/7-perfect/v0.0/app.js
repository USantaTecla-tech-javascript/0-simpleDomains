const { Console } = require("./console");

const console = new Console();
const number = console.readInt(`Dame un número positivo: `);
let sum = 0;
for(let i=1; i < number; i++){
  if (number % i === 0){
    console.writeln(i);
    sum += i;
  }
}
console.writeln(sum);
const isPerfect = sum === number;
console.writeln(`El número ${number} ${isPerfect ? `si` : `no`} es perfecto`);
