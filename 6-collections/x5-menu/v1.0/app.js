const { Console } = require("./console");

const console = new Console();
function sum(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return sum;
}

function average(data) {
  return sum(data) / data.length
}

function printGreaters(data, value) {
  console.writeln("Mayores: ");
  for (let i = 0; i < data.length; i++) {
    if (data[i] > value) {
      console.writeln(data[i]);
    }
  }
}

function printLess(data, value) {
  console.writeln("Menores: ");
  for (let i = 0; i < data.length; i++) {
    if (data[i] < value) {
      console.writeln(data[i]);
    }
  }
}

let values = [23, 24, 53, 53, 34, 23, 54, 32, 11, 45, 77, 3, 32, 22];
let avg = average(values);
printGreaters(values, avg);
console.writeln("Media: " + avg);
printLess(values, avg);