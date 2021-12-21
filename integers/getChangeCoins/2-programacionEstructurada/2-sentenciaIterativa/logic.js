let amount = +prompt("Dame la cantidad de céntimos: ");
const COINS = [50, 20, 10, 5, 2, 1];

let msg = "";
for (let i = 0; i < COINS.length; i++) {
  const amountInCoins = amount - amount % COINS[i];
  amount -= amountInCoins;
  const coins = amountInCoins / COINS[i];
  msg += coins > 0 ? coins + " moneda(s) de " + COINS[i] + "\n" : "";
}
console.log(msg);
