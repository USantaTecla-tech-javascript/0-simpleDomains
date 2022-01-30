const { Console } = require("./console");

const console = new Console();
// const COINS = [11, 5, 1];
// let amount = console.readInt("Dame la cantidad de céntimos: ");
// let msg = "";
// let coins = getChangedCoins(amount);
// for (let i = 0; i < COINS.length; i++) {
//   msg += coins > 0 ? `${coins[i]} moneda(s) de ${COINS[i]}\n` : ``;
// }
// console.writeln(msg);

function getChangedCoins(value) {
  if (value < COINS[1]) {
    return [value,0,0];
  }
  if (value < COINS[0]) {
    return sum([0,1,0], getChangedCoins(value - 5));
  }
  if (value === COINS[0]) {
    return [0,0,1];
  }
  let changedCoins = [];
  for (let i = 0; i < COINS.length; i++) {
    const coins = Array.fill(0,0,2);
    coins[i] = 1;
    changedCoins[i] = sum(coins, getChangedCoins(value - COINS[i]));
  }
  return min(changedCoins);
  
}

function sum(left, right){
  console.writeln("------");
  for (let i = 0; i < left.length; i++) {
    console.writeln(left[i]);
  }
  for (let i = 0; i < right.length; i++) {
    console.writeln(right[i]);
  }
  console.writeln("------");
  console.readInt();
  let [ leftHead, ...leftTail] = left;
  let [ rightHead, ...rightTail] = right;
  if (leftTail === []){
    return [leftHead + rightHead]
  }
  return [leftHead + rightHead].concat(sum(leftTail, rightTail));
}

let s = sum([1,0,0], [0,1,0]);
console.writeln("====");
for (let i = 0; i < s.length; i++) {
  console.writeln(s[i]);
}
console.writeln("====");



function min([head, ...tail]){

  function amount([head, ...tail]){
    if (tail === []){
      return 0;
    }
    return head + amount(tail);
  }

  if (amount(head) < amount(min(tail))){
    return head;
  }
  return min(tail);
}
