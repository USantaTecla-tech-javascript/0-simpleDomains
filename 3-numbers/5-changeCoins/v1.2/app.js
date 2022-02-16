const { Console } = require("./console");

const console = new Console();
let amount = console.readNumber("Dame la cantidad de céntimos: ");
const COINS = [50, 20, 10, 5, 2, 1];
let msg = ``;
for (let i = 0; i < COINS.length; i++) {
  const remainder = amount - amount % COINS[i];
  amount -= remainder;
  const coins = remainder / COINS[i];
  msg += coins > 0 ? `${coins} moneda(s) de ${COINS[i]}\n` : ``;
}
console.writeln(msg);
