const { Console } = require("./console");

const console = new Console();
const age = console.readNumber("Dame tu edad: ");
const previous = age - 1;
const next = age + 1;
const prefix = `E`;
const suffix = age === 0 ? `` : `l año pasado tenías ${previous} año${previous !== 1 ? `s` : ``}
y e`; 
console.writeln(`${prefix + suffix}l año que viene tendrás ${next} año${next !== 1 ? `s` : ``}`);
