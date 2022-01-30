const { Console } = require("./console");

const console = new Console();
const amount = console.readNumber(`Dame un número positivo: `);
for (let i = 1; i <= amount; i++) {
  printBlock(i);
}

function printBlock(number){
  let msg = ``;
  if (number === 1){
    msg += `U\n`;
  } else if (isPrime(number)){
    for(let i=0; i<number; i++){
      msg += `P`;
    }
    msg += `\n`;
  } else {
    let divisor = 2;
    while (number % divisor != 0){
      divisor++;
    }
    for(let i=0; i<divisor; i++){
      for(let j=0; j<number / divisor; j++){
        msg += `C`;
      }
      msg += `\n`;
    }
  }
  console.write(msg);
}

function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}