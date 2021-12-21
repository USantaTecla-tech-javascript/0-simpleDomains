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
  console.log("Mayores: ");
  for (let i = 0; i < data.length; i++) {
    if (data[i] > value) {
      console.log(data[i]);
    }
  }
}

function printLess(data, value) {
  console.log("Menores: ");
  for (let i = 0; i < data.length; i++) {
    if (data[i] < value) {
      console.log(data[i]);
    }
  }
}

let values = [23, 24, 53, 53, 34, 23, 54, 32, 11, 45, 77, 3, 32, 22];
let avg = average(values);
printGreaters(values, avg);
console.log("Media: " + avg);
printLess(values, avg);