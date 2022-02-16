const { Console } = require("./console");

const console = new Console();
let key = console.readNumber(`Dame un valor para buscar en la serie: `);
let data = [];
let i = 0;
do {
  data[i] = console.readString(`Dame un valor o un punto "." para finalizar la serie`);
  i++;
} while (data[i - 1] !== ".");
delete data[i];
const found = data.find(value => value == key);
console.writeln(`En la serie ${found ? `sí` : `no`} se encuentra el valor ${key}`);
