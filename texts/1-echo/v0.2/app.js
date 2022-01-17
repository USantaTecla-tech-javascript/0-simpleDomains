const { Console } = require("./console");

const console = new Console();
const msg = console.readString("Hay eco!!! Escribe algo:");
console.writeln(`${msg}!!!`);
