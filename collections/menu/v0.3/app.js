const { Console } = require("./console");

const console = new Console();
let values = [23, 24, 53, 53, 34, 23, 54, 32, 11, 45, 77, 3, 32, 22];
let sum = 0;
for (let i = 0; i < values.length; i++) {
  sum += values[i];
}
let average = sum / values.length;
console.writeln("Mayores: ");
for (let i = 0; i < values.length; i++) {
  if (values[i] > average) {
    console.writeln(values[i]);
  }
}
console.writeln("Media: " + average);
console.writeln("Menores: ");
for (let i = 0; i < values.length; i++) {
  if (values[i] < average) {
    console.writeln(values[i]);
  }
}
