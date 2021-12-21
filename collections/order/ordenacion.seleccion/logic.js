function print(data, title) {
  console.log("Values " + title + ":");
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}

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
    values[min] = values[i];
    values[i] = temp;
  }
}

let measures = [45, 43, 36, 72, 16];
print(measures, "desordenados");
sort(measures);
print(measures, "ordenados");