const { Console } = require("./console");

const console = new Console();
const age = console.readNumber("Dame tu edad: ");
const previous = age - 1;
const next = age + 1;
let prefix = `E`;
if (age > 0) //{
  prefix += `l año pasado tenías ${previous} año${previous !== 1 ? `s` : ``}
y e`;
//}
console.writeln(`${prefix}l año que viene tendrás ${next} año${next !== 1 ? `s` : ``}`);
