function print(data, title) {
  console.log("Values " + title + ":");
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}

function sort(values) {
  let change;
  do {
    change = false;
    for (let i = 0; i < values.length - 1; i++) {
      if (values[i] > values[i + 1]) {
        let temp = values[i];
        values[i] = values[i + 1];
        values[i + 1] = temp;
        change = true;
      }
    }
  } while (change);
}

let measures = [5, 4, 3, 2, 1];
print(measures, "desordenados");
sort(measures);
print(measures, "ordenados");