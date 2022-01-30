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

function sort(data) { // insertion sort

  for (let i = 1; i < data.length; i++) {
    let j = 0;
    while (data[j] < data[i]) {
      j++;
    }
    if (i != j) {
      let temp = data[i];
      for (let k = i-1; k >= j; k--) {
        data[k + 1] = data[k];
      }
      data[j] = temp;
    }
  }
}
