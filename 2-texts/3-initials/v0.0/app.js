const { Console } = require("./console");

const console = new Console();
let input = console.readString("Introduce 3 palabras separadas por varios espacios: ");
let iBeginFirstWord = 0;
while (input[iBeginFirstWord] === ` `) //{
  iBeginFirstWord++;
//}
let iEndFirstWord = iBeginFirstWord + 1;
while (input[iEndFirstWord] !== ` ` && iEndFirstWord < input.length) //{
  iEndFirstWord++;
//}
iEndFirstWord--;
let msg = ``;
for (let i = iBeginFirstWord; i <= iEndFirstWord; i++) //{
  msg += input[i];
//}

let iBeginSecondWord = iEndFirstWord + 1;
while (input[iBeginSecondWord] === ` `) //{
  iBeginSecondWord++;
//}
let iEndSecondtWord = iBeginSecondWord + 1;
while (input[iEndSecondtWord] !== ` ` && iEndSecondtWord < input.length) //{
  iEndSecondtWord++;
//}
iEndSecondtWord--;
msg += ` `;
for (let i = iBeginSecondWord; i <= iEndSecondtWord; i++) //{
  msg += input[i];
//}

let iBeginThirdWord = iEndSecondtWord + 1;
while (input[iBeginThirdWord] === ` `) {
  iBeginThirdWord++;
}
let iEndThirdWord = iBeginThirdWord + 1;
while (input[iEndThirdWord] !== ` ` && iEndThirdWord < input.length) {
  iEndThirdWord++;
}
iEndThirdWord--;
msg += ` `;
for (let i = iBeginThirdWord; i <= iEndThirdWord; i++) //{
  msg += input[i];
//}
console.writeln(`.${msg}.`)




