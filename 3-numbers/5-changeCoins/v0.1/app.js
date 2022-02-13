const { Console } = require("./console");

const console = new Console();
let amount = console.readNumber("Dame la cantidad de céntimos: ");

const amount50 = amount - amount % 50;
const coins50 = amount50 / 50;

amount = amount - amount50;
const amount20 = amount - amount % 20;
const coins20 = amount20 / 20;

amount = amount - amount20;
const amount10 = amount - amount % 10;
const coins10 = amount10 / 10;

amount = amount - amount10;
const amount5 = amount - amount % 5;
const coins5 = amount5 / 5;

amount = amount - amount5;
const amount2 = amount - amount % 2;
const coins2 = amount2 / 2;

amount = amount - amount2;
console.writeln(`${coins50} moneda(s) de 50
${coins20} moneda(s) de 20 
${coins10} moneda(s) de 10 
${coins5} moneda(s) de 5
${coins2} moneda(s) de 2
${amount} moneda(s) de 1`);
