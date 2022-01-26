const { Console } = require("./console");

const console = new Console();
let data = ["a", "b", "c", "d", "e"];
printRows("Permutación", getPermutations(data));

function printRows(title, data) {
  for (let i = 0; i < data.length; i++) {
    printRow(`${title}-${i}`, data[i]);
  }
}

function printRow(title, data) {
  let msg = `${title}: `;
  for (let i = 0; i < data.length; i++) {
    msg += `${data[i]} `;
  }
  console.writeln(`${msg}`);
}

function getPermutations(data) {
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
