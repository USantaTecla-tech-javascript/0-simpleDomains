const { Console } = require("./console");

const console = new Console();
let msg = console.readInt("Hay eco, ...!!!\n'Di' algo:");
console.writeln(msg+", "+msg+", "+msg+"!!!");
console.writeln(msg+", "+msg+"!!");
console.writeln(msg+"!");
