const { Console } = require("./console");

const console = new Console();
const key = console.readString(`Dame un valor para buscar en la serie: `);
const data = readData();
console.writeln(`El número ${includes(data, key)} se encuentra en la serie`);

function readData() {
  const oneData = console.readString(`Dame un valor o un punto "." para finalizar la serie`);
  if (oneData === `.`) {
    return [];
  }
  return [oneData].concat(readData());
}

function includes(list, key) {
  if (list === [] || list[0] === `.`) {
    return `${key} no`;
  }
  let [head, ...tail] = list;
  if (head == `.`) {
    return `${key} si`;
  }
  return includes(tail, key);
}