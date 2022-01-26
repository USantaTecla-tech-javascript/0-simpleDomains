const { Console } = require("./console");

const console = new Console();
let amount = console.readInt("Dame la cantidad de céntimos: ");
const COINS = [11, 5, 1];
console.writeln(getChangedCoins(amount));

let msg = "";
for (let i = 0; i < COINS.length; i++) {
  const remainder = amount - amount % COINS[i];
  amount -= remainder;
  const coins = remainder / COINS[i];
  msg += coins > 0 ? `${coins} moneda(s) de ${COINS[i]}\n` : ``;
}
console.writeln(msg);

function getChangedCoins(value, tab = "  ") {
  console.writeln(`${tab}coins(${value});`);
  if (value < 5) {
    console.writeln(`${tab}<= ${value} de 1`);
    return value;
  }
  if (value === 5) {
    console.writeln(`${tab}<= 1 de 5`);
    return 1;
  }
  if (value < 11) {
    let x = 1 + getChangedCoins(value - 5, tab + "  ");
    console.writeln(`${tab}<= ${x} de 5 y el resto de 1`);
    return x;
  }
  if (value === 11) {
    console.writeln(`${tab}<= 1 de 11`);
    return 1
  }
  let changedCoins = [];
  for (let i = 0; i < COINS.length; i++) {
    changedCoins[i] = 1 + getChangedCoins(value - COINS[i], tab + "  ");
  }
  let x = min(changedCoins);
  console.writeln(`${tab}<= ${x} de ...`);
  return x;

  function min([head, ...tail]) {
    if (tail.length == 0) {
      return head;
    }
    if (head < min(tail)) {
      return head;
    }
    return min(tail);
  }

}


