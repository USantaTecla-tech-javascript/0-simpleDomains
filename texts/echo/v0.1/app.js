const { Console } = require("./console");

const console = new Console();
let any = console.readString("Di algo");
console.writeln("Hay eco, eco!!!\n" + any + "!!!");
