const { Console } = require("./console");

let console = new Console();
let amount = console.readNumber("Dame la cantidad de céntimos: ");

const remainder50 = amount % 50;
const amount50 = amount - remainder50;
const coins50 = amount50 / 50;
let msg = coins50 > 0 ? `${coins50} moneda(s) de 50\n` : ``;

amount -= amount50;
const remainder20 = amount % 20;
const amount20 = amount - remainder20;
const coins20 = amount20 / 20;
msg += coins20 > 0 ? `${coins20} moneda(s) de 20\n` : ``;

amount -= amount20;
const remainder10 = amount % 10;
const amount10 = amount - remainder10;
const coins10 = amount10 / 10;
msg += coins10 > 0 ? `${coins10} moneda(s) de 10\n` : ``;

amount -= amount10;
const remainder5 = amount % 5;
const amount5 = amount - remainder5;
const coins5 = amount5 / 5;
msg += coins5 > 0 ? `${coins5} moneda(s) de 5\n` : ``;

amount -= amount5;
const remainder2 = amount % 2;
const amount2 = amount - remainder2;
const coins2 = amount2 / 2;
msg += coins2 > 0 ? `${coins2} moneda(s) de 2\n` : ``;

amount -= amount2;
msg += amount > 0 ? `${amount} moneda(s) de 1\n` : ``;
console.writeln(msg);
