const { Console } = require("./console");

const console = new Console();
let age = console.readInt("Dame tu edad: ");
console.writeln(`${age > 0 ? `El año pasado tenías ${age - 1} año${age - 1 !== 1 ? `s`: ``}
` : ``}${age > 0 ? `y e` : `E`}l año que viene tendrás ${age + 1} año${age + 1 > 1 ? `s` : ``}`);
