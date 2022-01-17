const { Console } = require("./console");

const console = new Console();
console.writeln(`${console.readString("Hay eco!!! Escribe algo: ")}!!!`);
