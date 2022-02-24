const { Console } = require("./console");

const console = new Console();
let amount = console.readNumber("Dame la cantidad de céntimos: ");
const COINS = [11, 5, 1];
let coins = getChangedCoins(amount);
let msg = "";
for (let i = 0; i < COINS.length; i++) {
  msg += coins > 0 ? `${coins[i]} moneda(s) de ${COINS[i]}\n` : ``;
}
console.writeln(msg);

function getChangedCoins(value, tab = "  ") {
  if (value < 5) {
    return [0, 0, value];
  }
  if (value === 5) {
    return [0, 1, 0];
  }
  if (value < 11) {
    return [0, 1, value - 5];
  }
  if (value === 11) {
    return [1, 0, 0];
  }
  let changedCoins = [];
  for (let i = 0; i < COINS.length; i++) {
    changedCoins[i] = getChangedCoins(value - COINS[i], tab + "  ");
  }
  let positionMin = 0;
  for(let i=1; i<COINS.length; i++){
    if (sum(changedCoins[i]) < sum(changedCoins[positionMin])){
      positionMin = i;
    }
  }
  changedCoins[positionMin][positionMin]++;
  return changedCoins;

  function sum(numbers){
    let acc = 0;
    for(let number of numbers){
      acc += number;
    }
    return acc;
  }
}


