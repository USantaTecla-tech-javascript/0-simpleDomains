const { Console } = require("./console");

const console = new Console();
const age = console.readNumber("Dame tu edad: ");
const previous = age - 1;
const next = age + 1;
console.writeln(`${age > 0 ? `El año pasado tenías ${previous} año${previous !== 1 ? `s`: ``}
` : ``}${age > 0 ? `y e` : `E`}l año que viene tendrás ${next} año${next !== 1 ? `s` : ``}`);


