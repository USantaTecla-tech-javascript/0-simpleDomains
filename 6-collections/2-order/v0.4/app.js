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

function sort(values){

  function quicksort(values, left, right) {
    let pivot = data[izq];
    let i = left;
    let j = right;
    while(i < j) {
       while(data[i] <= pivot && i < j)
        i++;
       while(data[j] > pivot)
        j--;
       if (i < j) {
        let buffer = data[i];
        data[i] = data[j];
        data[j] = buffer;
       }
     }
     data[left] = data[j];
     data[j] = pivot;
     if (left < j-1)
      quicksort(data, left, j-1);
     if (j+1 < right)
      quicksort(data, j+1, right);
  }

  quicksort(values, 0, values.length);
}


