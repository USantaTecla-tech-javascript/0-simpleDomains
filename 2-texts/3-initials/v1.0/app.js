const { Console } = require("./console");

const console = new Console();
const AMOUNT = 3;
let input = console.readString("Introduce 3 palabras separadas por varios espacios: ");
let msg = ``;
let iBeginWord = 0;
for (let j = 0; j < AMOUNT; j++) {
  while (input[iBeginWord] === ` `) {
    iBeginWord++;
  }
  let iEndWord = iBeginWord + 1;
  while (input[iEndWord] !== ` ` && iEndWord < input.length) {
    iEndWord++;
  }
  iEndWord--;
  for (let i = iBeginWord; i <= iEndWord; i++) {
    msg += input[i];
  }
  if (i !== AMOUNT) {
    msg += ` `;
  }
  iBeginWord = iEndWord + 1;
}
console.writeln(`.${msg}.`)




