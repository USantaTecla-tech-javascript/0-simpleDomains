const { Console } = require("./console");

let console = new Console();
let amount = console.readNumber(`Dame la cantidad de céntimos: `);

const amount50 = amount - amount % 50;
amount -= amount50;
const coins50 = amount50 / 50;
const msg50 = coins50 > 0 ? `${coins50} moneda(s) de 50\n` : ``;

const amount20 = amount - amount % 20;
amount -= amount20;
const coins20 = amount20 / 20;
const msg20 =  coins20 > 0 ? `${coins20} moneda(s) de 20\n` : ``;

const amount10 = amount - amount % 10;
amount -= amount10;
const coins10 = amount10 / 10;
const msg10 = coins10 > 0 ? `${coins10} moneda(s) de 10\n` : ``;

const amount5 = amount - amount % 5;
amount -= amount5;
const coins5 = amount5 / 5;
const msg5 = coins5 > 0 ? `${coins5} moneda(s) de 5\n` : ``;

const amount2 = amount - amount % 2;
amount -= amount2;
const coins2 = amount2 / 2;
const msg2 = coins2 > 0 ? `${coins2} moneda(s) de 2\n` : ``;

const msg1 = amount > 0 ? `${amount} moneda(s) de 1\n` : ``;
console.writeln(msg50 + msg20 + msg10 + msg5 + msg2 + msg1);
