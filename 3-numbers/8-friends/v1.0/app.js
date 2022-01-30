const { Console } = require("./console");

const console = new Console();
let amount = console.readNumber("Dame un número: ");
for(let i=1; i<=amount; i++){
  let sum = 0;
  for (let j = 1; j < i; j++) {
    if (i % j == 0) {
      sum += j;
    }
  }
  let sum2 = 0;
  if (sum !== i && sum < amount){
    for (let j = 1; j < sum; j++) {
      if (sum % j == 0) {
        sum2 += j;
      }
    }
  }
  if (sum2 === i){
    console.writeln(`Los números ${i} y ${sum} son amigos`);
  }
}
