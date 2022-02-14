const { Console } = require("./console");

const console = new Console();
let input = console.readString("Introduce 3 palabras separadas por varios espacios: ");
let msg = ``;
let iBeginFirstWord = 0;
for(let j = 0; j<3; j++){
  while (input[iBeginFirstWord] === ` `) {
    iBeginFirstWord++;
  }
  let iEndFirstWord = iBeginFirstWord + 1;
  while (input[iEndFirstWord] !== ` ` && iEndFirstWord < input.length) {
    iEndFirstWord++;
  }
  iEndFirstWord--;
  let msg = ``;
  for (let i = iBeginFirstWord; i <= iEndFirstWord; i++) {
    msg += input[i];
  }
  iBeginFirstWord = iEndFirstWord + 1;  
}
console.writeln(`.${msg}.`)




