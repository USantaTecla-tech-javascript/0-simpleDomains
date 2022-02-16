const { Console } = require("./console");

const console = new Console();
const number = console.readNumber(`Dame un número positivo: `);
console.writeln(`El número ${number} ${isPerfect(number) ? `si` : `no`} es perfecto`);

function isPerfect(number){
  let sum = 0;
  for(let i=1; i < number; i++){
    if (number % i === 0){
      sum += i;
    }
  }
  return sum === number;
}