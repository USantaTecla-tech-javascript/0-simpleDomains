const { Console } = require("./console");

const console = new Console();
let key = console.readNumber(`Dame un valor para buscar en la serie: `);
let found = false;
do {
  value = console.readString(`Dame un valor o un punto "." para finalizar la serie`);
  if (key == value) {
    found = true;
  }
} while (value !== ".");
console.writeln(`En la serie ${found ? `sí` : `no`} se encuentra el valor ${key}`);
