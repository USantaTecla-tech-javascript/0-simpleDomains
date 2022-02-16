const { Console } = require("./console");

const console = new Console();
let key = console.readNumber(`Dame un valor para buscar en la serie: `);
let data = [];
let i = 0;
do {
  data[i] = console.readString(`Dame un valor o un punto "." para finalizar la serie`);
  i++;
} while (data[i - 1] !== ".");
let j = 0;
while (key != data[j] && j < data.length - 2) {
  j++;
}
let found = key == data[j];
console.writeln(`En la serie ${found ? `sí` : `no`} se encuentra el valor ${key}`);
