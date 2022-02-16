const { Console } = require("./console");

const console = new Console();
const age = console.readNumber("Dame tu edad: ");
let msg = `E`;
const previous = age - 1;
if (age > 0) {
  msg += `l año pasado tenías ${getPlural(previous, `año`)}
y e`;
}
const next = age + 1;
msg += `l año que viene tendrás ${getPlural(next, `año`)}`;
console.writeln(msg);

function getPlural(amount, title) {
  if (amount !== 1) {
    title += `s`;
  }
  return `${amount} ${title}`;
}
