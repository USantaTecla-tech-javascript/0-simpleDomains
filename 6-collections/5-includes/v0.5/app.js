const { Console } = require("./console");

const console = new Console();
let key = console.readNumber(`Dame un valor para buscar en la serie: `);
let data = readData();
const found = find(data, value => key == value);
console.writeln(`En la serie ${found ? `sí` : `no`} se encuentra el valor ${key}`);

function readData() {
  let data = [];
  let i = 0;
  do {
    data[i] = console.readString(`Dame un valor o un punto "." para finalizar la serie`);
    i++;
  } while (data[i - 1] !== ".");
  delete data[i];
  return data;
}

function find(data, predicate){
  for (let i = 0; i < data.length - 1; i++) {
    if (predicate(data[i])) {
      return true;
    }
  }  
  return false;
}