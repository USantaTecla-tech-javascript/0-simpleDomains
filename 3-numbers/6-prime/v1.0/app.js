const { Console } = require("./console");

const console = new Console();
const amount = console.readNumber(`Dame un número positivo: `);
let sum = 0;
for(let i=1; i<=amount; i++){
  let isPrime = false;
  if (i >= 2) {
    let next = 2;
    while (i % next != 0) {
      next++;
    }
    isPrime = i == next;
  }
  if (isPrime){
    sum += i;
  }
}
console.writeln(`La suma de los primos en los primeros ${amount} números es ${sum}`);
