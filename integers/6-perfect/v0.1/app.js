const { Console } = require("./console");

const console = new Console();

function isPerfect(number){
  let sum = 0;
  for(let i=1; i < number; i++){
    if (number % i === 0){
      sum += i;
    }
  }
  return sum === number;
}

const number = console.readInt(`Dame un número positivo: `);
console.writeln(`El número ${number} ${isPerfect(number) ? `si` : `no`} es perfecto`);
