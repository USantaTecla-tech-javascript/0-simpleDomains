const { Console } = require("./console");

const console = new Console();
const position = console.readNumber(`Dame un número positivo: `);
let perfects = 0;
let number = 0;
do {
  number++;
  let sum = 0;
  for(let i=1; i < number; i++){
    if (number % i === 0){
      sum += i;
    }
  }
  if (sum === number) {
    perfects++;
  }
} while (perfects === position);
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
