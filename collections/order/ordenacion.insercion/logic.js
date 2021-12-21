function print(data, title) {
  console.log("Values " + title + ":");
  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
  }
}

function sort(data) {
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

let measures = [5, 4, 3, 2, 1];
print(measures, "desordenados");
sort(measures);
print(measures, "ordenados");