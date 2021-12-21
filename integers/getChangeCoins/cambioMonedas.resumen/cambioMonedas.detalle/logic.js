let amount = +prompt("Dame la cantidad de céntimos: ");
const COINS = [50, 20, 10, 5, 2, 1];
const COINS_OF = " moneda(s) de ";

let msg = "El cambio de " + amount + " es:\n";
let remainder = amount;
for (let i = 0; i < COINS.length; i++) {
  const amountCoin = remainder - remainder % COINS[i];
  remainder -= amountCoin;
  const coins = amountCoin / COINS[i];
  msg += coins > 0 ? coins + COINS_OF + COINS[i] + "\n" : "";
}
console.log(msg);

