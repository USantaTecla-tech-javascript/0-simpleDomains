const { Console } = require("./console");

let console = new Console();
let amount = console.readNumber(`Dame la cantidad de céntimos: `);

const amount50 = amount - amount % 50;
const coins50 = amount50 / 50;
let msg = coins50 > 0 ? `${coins50} moneda(s) de 50\n` : ``;

amount -= amount50;
const amount20 = amount - amount % 20;
const coins20 = amount20 / 20;
msg += coins20 > 0 ? `${coins20} moneda(s) de 20\n` : ``;

amount -= amount20;
const amount10 = amount - amount % 10;
const coins10 = amount10 / 10;
const msg10 = coins10 > 0 ? `${coins10} moneda(s) de 10\n` : ``;

amount -= amount10;
const amount5 = amount - amount % 5;
const coins5 = amount5 / 5;
const msg5 = coins5 > 0 ? `${coins5} moneda(s) de 5\n` : ``;

amount -= amount5;
const amount2 = amount - amount % 2;
const coins2 = amount2 / 2;
const msg2 = coins2 > 0 ? `${coins2} moneda(s) de 2\n` : ``;

amount -= amount2;
const msg1 = amount > 0 ? `${amount} moneda(s) de 1\n` : ``;
console.writeln(msg50 + msg20 + msg10 + msg5 + msg2 + msg1);
