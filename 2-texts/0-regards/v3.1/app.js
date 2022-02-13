const { Console } = require("./console");

const console = new Console();
let name = console.readString("Como te llamas?");
console.writeln(`Hola, ${name}!!! :-)`);
