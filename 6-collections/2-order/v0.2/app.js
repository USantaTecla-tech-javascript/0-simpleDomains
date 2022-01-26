const { Console } = require("./console");

const console = new Console();
let measures = [9,2,5,7,1,3,8,0,4,6];
print(measures, "desordenados");
sort(measures);
print(measures, "ordenados");

function print(data, title) {
  console.writeln("Valores " + title + ":");
  for (let i = 0; i < data.length; i++) {
    console.writeln(data[i]);
  }
}

function sort(values) { // selection sort

  function minPosition(values, from) {
    let min = from;
    for (let j = from + 1; j < values.length; j++) {
      if (values[min] > values[j]) {
        min = j;
      }
    }
    return min;
  }

  for (let i = 0; i < values.length - 1; i++) {
    let min = minPosition(values, i);
    let temp = values[min];
    values[min] = values[i];
    values[i] = temp;
  }
}
