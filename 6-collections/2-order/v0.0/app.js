const { Console } = require("./console");

const console = new Console();
let measures = [9,2,5,7,1,3,8,0,4,6];
print("desordenados", measures);
sort(measures);
print("ordenados", measures);

function print(title, data) {
  console.writeln(`Valores ${title} :`);
  for (let i = 0; i < data.length; i++) {
    console.writeln(data[i]);
  }
}

function sort(values) {   // bubble sort
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
