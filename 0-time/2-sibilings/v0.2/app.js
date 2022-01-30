const { Console } = require("./console");

const console = new Console();
const age = console.readNumber("Dame tu edad: ");
const previous = age - 1;
const next = age + 1;
let msg = `E`;
if (age > 0) {
  msg += `l año pasado tenías ${previous} año${previous !== 1 ? `s` : ``}
y e`;
}
msg += `l año que viene tendrás ${next} año${next !== 1 ? `s` : ``}`;
console.writeln(msg);
