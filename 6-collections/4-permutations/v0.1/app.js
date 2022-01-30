const { Console } = require("./console");

const console = new Console();
let data = readData();
printRows("Permutación", getPermutations(data));

function readData() {
  let data = [];
  let i = 0;
  do {
    data[i] = console.readString("Dame un valor (. para finalizar): ");
    i++;
  } while (data[i - 1] !== ".");
  data.splice(data.length - 1, 1);
  return data;
}

function printRows(title, data) {
  for (let i = 0; i < data.length; i++) {
    printRow(`${title}-${i}`, data[i]);
  }

  function printRow(title, data) {
    let msg = `${title}: `;
    for (let i = 0; i < data.length; i++) {
      msg += `${data[i]} `;
    }
    console.writeln(`${msg}`);
  }
}

function getPermutations(data) {
  if (data.length === 0) {
    return [];
  }
  let buffer = data.slice();
  let result = [buffer.slice()];
  let counters = new Array(buffer.length).fill(0);
  let column = 1;
  while (column < buffer.length) {
    if (counters[column] === column) {
      counters[column] = 0;
      column++;
    } else {
      swap(buffer, column, getPivot(counters, column));
      result.push(buffer.slice());
      counters[column]++;
      column = 1;
    }
  }
  return result;

  function getPivot(counters, column) {
    let result = column % 2;
    if (result === 1) {
      result = counters[column];
    }
    return result;
  }

  function swap(data, left, right) {
    let temp = data[left];
    data[left] = data[right];
    data[right] = temp;
  }

}
