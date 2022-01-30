const { Console } = require("./console");

const console = new Console();
let data = [];
let i = 0;
do {
  data[i] = console.readString("Dame un valor (. para finalizar): ");
  i++;
} while (data[i - 1] !== ".");
data.splice(data.length - 1, 1);
let permutations = [];
if (data.length !== 0) {
  let buffer = data.slice();
  permutations = [buffer.slice()];
  let counters = new Array(buffer.length).fill(0);
  let column = 1;
  while (column < buffer.length) {
    if (counters[column] === column) {
      counters[column] = 0;
      column++;
    } else {
      let pivot = column % 2;
      if (pivot === 1) {
        pivot = counters[column];
      }
      let temp = buffer[column];
      buffer[column] = buffer[pivot];
      buffer[pivot] = temp;
      permutations.push(buffer.slice());
      counters[column]++;
      column = 1;
    }
  }
}
for (let i = 0; i < permutations.length; i++) {
  let msg = `Permutación-${i}: `;
  for (let j = 0; j < permutations[i].length; j++) {
    msg += `${permutations[i][j]} `;
  }
  console.writeln(`${msg}`);
}
