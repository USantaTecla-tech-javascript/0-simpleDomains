const { Console } = require("./console");

const console = new Console();
console.writeln("Hola, " + console.readString("Como te llamas?") + "!!! :-)");
