const { Console } = require("./console");

const console = new Console();
console.writeln("Hay eco, eco!!!\n" + console.readString("Di algo") + "!!!");
