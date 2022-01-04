const { Console } = require("./console");

const console = new Console();
let msg = console.readInt("Hay eco, ...!!!\n'Di' algo:");
console.log(msg+", "+msg+", "+msg+"!!!");
console.log(msg+", "+msg+"!!");
console.log(msg+"!");
