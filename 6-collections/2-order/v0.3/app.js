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

function sort (arr) { // quick sort
  let stack = [];
  let start = 0;
  let end = arr.length - 1;
  stack.push({x: start, y: end});
  while(stack.length){
    const { x, y } = stack.shift();
    const PI = partitionHigh(arr, x, y);
    if(PI - 1 > x){
      stack.push({x: x, y: PI - 1});
    }
    if(PI + 1 < y){
      stack.push({x: PI + 1, y: y});
    }
  }
  
  function partitionHigh (arr, low, high) {
    let pivot = arr[high];
    let i = low;
    for(let j = low; j < high; j++){
      if(arr[j] <= pivot){      
        swap(arr, i, j);
        i++;
      }
    }
    swap(arr, i, high);
    return i;
  }

  function swap(arr, left, right) {
    const temp = arr[left]
    arr[left] = arr[right]
    arr[right] = temp;
  }
  
}

