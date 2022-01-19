const { Console } = require("./console");

const console = new Console();
const name = console.readString("Como te llamas?");
console.writeln(`Hola, ${name}!!! :-)`);
console.writeln(`Adios, ${name}!!! :-)`);
