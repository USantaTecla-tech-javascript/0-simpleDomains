const { Console } = require("./console");

const console = new Console();
const msg = console.readString("Hay triple eco!!! Escribe algo:");
let echo = `${msg}, ${msg}, ${msg}!!!\n`;
echo += `${msg}, ${msg}!!!\n`;
echo += `${msg}!!!\n`;
console.writeln(echo);
