const { Console } = require("./console");

const console = new Console();
let data = readData();
printRows("Permutación", getPermutations(data));

function readData(){
  let data = [];
  let i = 0;
  do {
    data[i] = console.readString("Dame un valor (. para finalizar): ");
    i++;
  } while (data[i-1] !== ".");
  data.splice(data.length - 1, 1);
  return data;
}

function getRows(title, [head, ...tail], index = 0) {
  if (head === undefined){
    return ``;
  }
  return getRow(`${title}-${index}`, head) + getRows(title, tail, index+1);
}

function getRow(title, [head, ...tail], index = 0) {
  if (head === undefined){
    return `\n`;
  }
  return `${index === 0? `${title}:` : ``} ${head} ` + getRow(title, tail, index + 1);
}

function getPermutations(data) {
  if (data.length === 0){
    return [];
  }
  if (data.length === 1){
    return [data];
  }
  var result = [];
  for(let pivot=0; pivot<data.length; pivot++){
    let withoutPivot = data.slice();
    withoutPivot.splice(pivot,1);
    let permutations = getPermutations(withoutPivot);
    for(let i=0; i<permutations.length; i++){
      permutations[i].push(data[pivot]);
    }
    result = result.concat(permutations);
  }
  return result;
}
