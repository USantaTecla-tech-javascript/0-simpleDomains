const { Console } = require("./console");

const console = new Console();
const position = console.readNumber(`Dame una posición: `);
let number = 0;
for(let i=0; i <position; i++){
  number++;
  while (!isPerfect(number)){
    number++;
  }
}
console.writeln(`El número ${number} es el ${position}º número perfecto`);

function isPerfect(number){
  let sum = 0;
  for(let i=1; i < number; i++){
    if (number % i === 0){
      sum += i;
    }
  }
  return sum === number;
}