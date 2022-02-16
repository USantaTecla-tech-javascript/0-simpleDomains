const { Console } = require("./console");

const console = new Console();
let data = readData();
console.writeln(printRows(`Permutación`, getPermutations(data)));

function readData() {
  let data = [];
  let i = 0;
  let end;
  do {
    const answer = console.readString(`Dame un valor o un punto "." para finalizar la serie: `);
    end = answer === `.`;
    if (!end) {
      data[i] = answer;
      i++;
    }
  } while (!end);
  return data;
}

function printRows(title, [head, ...tail], index = 0) {
  if (head === undefined){
    return ``;
  }
  return printRow(`${title}-${index}`, head) + printRows(title, tail, index+1);
}

function printRow(title, [head, ...tail], index = 0) {
  if (head === undefined){
    return `\n`;
  }
  return `${index === 0? `${title}:` : ``} ${head} ` + printRow(title, tail, index + 1);
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
