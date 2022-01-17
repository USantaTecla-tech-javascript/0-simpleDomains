const { Console } = require("./console");

function sumDivisors(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (number % i == 0) {
      sum += i;
    }
  }
  return sum;
}

function areFriends(number1, number2) {
  return number1 == sumDivisors(number2)
  && number2 == sumDivisors(number1);
}

const console = new Console();
let amount = console.readInt("Dame un número: ");
for(let i=1; i<=amount; i++){
  if (i !== sumDivisors(i) && areFriends(i, sumDivisors(i))){
    console.writeln(`Los números ${i} y ${sumDivisors(i)} son amigos`);
  }
}
