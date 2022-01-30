const { Console } = require("./console");

const console = new Console();
const age = console.readNumber("Dame tu edad: ");
const previous = age - 1;
const next = age + 1;
let msg = `E`;
if (age > 0) {
  msg += `l año pasado tenías ${getPlural(previous, `año`)}
y e`;
}
msg += `l año que viene tendrás ${getPlural(previous, `año`)}`;
console.writeln(msg);

function getPlural(amount, title) {
  let result = amount;
  if (amount !== 1){
    result += `s`;
  }
  return result;
}
