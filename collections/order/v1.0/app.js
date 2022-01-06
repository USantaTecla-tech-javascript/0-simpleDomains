const { Console } = require("./console");

const console = new Console();
function print(data, title) {
  console.writeln("Values " + title + ":");
  for (let i = 0; i < data.length; i++) {
    console.writeln(data[i]);
  }
}

// selección directa
function minPosition(values, from) {
  let min = from;
  for (let j = from + 1; j < values.length; j++) {
    if (values[min] > values[j]) {
      min = j;
    }
  }
  return min;
}

function sort(values) {
  for (let i = 0; i < values.length - 1; i++) {
    let min = minPosition(values, i);
    let temp = values[min];
    for (let j = min - 1; j >= i; j--) {
      values[j + 1] = values[j];
    }
    values[i] = temp;
  }
}

console.writeln("Tonteria con mucho desplazamiento")
let measures = [4, 3, 6, 7, 1];
print(measures, "desordenados");
sort(measures);
print(measures, "ordenados");