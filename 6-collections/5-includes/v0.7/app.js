const { Console } = require("./console");

let console = new Console();
const key = console.readString(`Dame un valor para buscar en la serie: `);
const data = readData();
console.writeln(`El número ${includes(data, key)} se encuentra en la serie`);

function readData(){
  let oneData = readOneData();
  return oneData === "." ?
      []
    :
      [oneData].concat(readData());

  function readOneData(){
    return console.readString(`Dame un valor o un punto "." para finalizar la serie`);
  }
}

function includes(list, key){
  const YES = `${key} si`;
  const NO = `${key} no`;

  if (list === [] || list[0] === `.`){
    return NO;
  } else {
    let [head, ...tail] = list;
    if (head == `.`){
      return YES;
    }
    if (tail.length === 0){
      return NO;
    }
    return includes(tail, key);
  }
}