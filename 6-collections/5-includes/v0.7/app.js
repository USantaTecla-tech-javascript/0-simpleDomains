const { Console } = require("./console");

let console = new Console();
const key = console.readString(`Dame un valor para buscar en la serie: `);
const data = readData();
console.writeln(`El número ${includes(data, key)} se encuentra en la serie`);

function readData() {
  const oneData = console.readString(`Dame un valor o un punto "." para finalizar la serie`);
  return oneData === "." ?
    []
    :
    [oneData].concat(readData());
}

function includes(list, key) {
  const YES = `${key} si`;
  const NO = `${key} no`;

  return list === [] || list[0] === `.` ?
    NO
    :
    head == key ?
      YES
      :
      includes(tail, key)
}