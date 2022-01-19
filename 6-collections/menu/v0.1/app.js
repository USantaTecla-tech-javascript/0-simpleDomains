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

function getGreaters(data, value) {
  let greaters = [];
  let position = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > value) {
      greaters[position] = 0;
      position++;
    }
  }
  return greaters;
}

function getLess(data, value) {
  let less = [];
  let position = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] < value) {
      less[position] = 0;
      position++;
    }
  }
  return less;
}

function print(title, data) {
  console.writeln(title);
  for (let i = 0; i < data.length; i++) {
    console.writeln(data[i]);
  }
}

let values = [23, 24, 53, 53, 34, 23, 54, 32, 11, 45, 77, 3, 32, 22];
let avg = average(values);
let greaters = getGreaters(values, avg);
let less = getLess(values, avg);

let avgGreaters = average(greaters);
let greatersGreaters = getGreaters(greaters, avgGreaters);
let lessGreaters = getLess(greaters, avgGreaters);

let avgLess = average(less);
let greatersLess = getGreaters(less, avgLess);
let lessLess = getLess(less, avgLess);

print("Mayores de mayores", greatersGreaters);
console.writeln("Media de mayores: " + avgGreaters);
print("Menores de mayores", lessGreaters);
console.writeln("Media: " + avg);
print("Mayores de menores", greatersLess);
console.writeln("Media de menores: " + avgLess);
print("Menores de menores", lessLess);

