const { Console } = require("./console");

let console = new Console();
let amount = console.readNumber("Dame la cantidad de céntimos: ");

const remainder50 = amount % 50;
const amount50 = amount - remainder50;
const coins50 = amount50 / 50;
const msg50 = coins50 > 0 ? `${coins50} moneda(s) de 50\n` : ``;
let msg = msg50;

amount = amount - amount50;
const remainder20 = amount % 20;
const amount20 = amount - remainder20;
const coins20 = amount20 / 20;
const msg20 = coins20 > 0 ? `${coins20} moneda(s) de 20\n` : ``;
msg = msg + msg20;

amount = amount - amount20;
const remainder10 = amount % 10;
const amount10 = amount - remainder10;
const coins10 = amount10 / 10;
const msg10 = coins10 > 0 ? `${coins10} moneda(s) de 10\n` : ``;
msg = msg + msg10;

amount = amount - amount10;
const remainder5 = amount % 5;
const amount5 = amount - remainder5;
const coins5 = amount5 / 5;
const msg5 = coins5 > 0 ? `${coins5} moneda(s) de 5\n` : ``;
msg = msg + msg5;

amount = amount - amount5;
const remainder2 = amount % 2;
const amount2 = amount - remainder2;
const coins2 = amount2 / 2;
const msg2 = coins2 > 0 ? `${coins2} moneda(s) de 2\n` : ``;
msg = msg + msg2;

amount = amount - amount2;
const msg1 = amount > 0 ? `${amount} moneda(s) de 1\n` : ``;
msg = msg + msg1;
console.writeln(msg);
