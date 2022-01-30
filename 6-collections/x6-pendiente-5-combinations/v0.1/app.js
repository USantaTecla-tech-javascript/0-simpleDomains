const { Console } = require("./console");

const console = new Console();
let data = ["a", "b", "c", "d", "e"];
console.writeln(getRows("Permutación", getCombinations(data)));

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

function getCombinations([head, ...tail]) {
  if (head === undefined){
    return [];
  }
  if (tail === undefined){
    return [[], data];
  }
  var result = getCombinations(tail);
  for(let combination of result){
    let x = combination.slice();
    x.push(head)
    result.push(combination.push());
  }
  return result;
}
