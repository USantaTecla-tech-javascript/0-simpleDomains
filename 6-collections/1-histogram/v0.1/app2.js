const { Console } = require("./console");

const console = new Console();

function readData() {
  let data = [];
  let value;
  let i = 0;
  do {
    value = console.readNumber("Dame un número positivo (0 para terminar): ");
    if (value !== 0) {
      data[i] = value;
      i++;
    }
  } while (value !== 0);
  return data;
}

function getAverage(data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum += data[i];
  }
  return parseInt(sum / data.length);
}

function getMax(data) {
  let max = data[0];
  for (let i = 0; i < data.length; i++) {
    if (max < data[i]) {
      max = data[i];
    }
  }
  return max;
}

function writeHistogram(data) {
  let avg = getAverage(data);
  let histogram = "";
  for (let i = getMax(data); i > 0; i--) {
    for (let j = 0; j < data.length; j++) {
      if (i == avg) {
        histogram += "-";
      } else if (i <= data[j]) {
        histogram += "*";
      } else if (i > data[j]) {
        histogram += " ";
      }
    }
    histogram += "\n";
  }
  console.writeln(histogram);
}

