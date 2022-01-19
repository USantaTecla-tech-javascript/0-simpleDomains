const { Console } = require("./console");

const console = new Console();
let msg = console.readString("Hay eco!!! Escribe algo: ");
console.writeln(`${msg}!!!`);
