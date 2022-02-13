const { Console } = require("./console");

const console = new Console();
let amount = console.readNumber("Dame la cantidad de céntimos: ");

let remainder50 = amount % 50;
let amount50 = amount - remainder50;
let coins50 = amount50 / 50;

amount = amount - amount50;
let remainder20 = amount % 20;
let amount20 = amount - remainder20;
let coins20 = amount20 / 20;

amount = amount - amount20;
let remainder10 = amount % 10;
let amount10 = amount - remainder10;
let coins10 = amount10 / 10;

amount = amount - amount10;
let remainder5 = amount % 5;
let amount5 = amount - remainder5;
let coins5 = amount5 / 5;

amount = amount - amount5;
let remainder2 = amount % 2;
let amount2 = amount - remainder2;
let coins2 = amount2 / 2;

amount = amount - amount2;
console.writeln(`${coins50} moneda(s) de 50
${coins20} moneda(s) de 20 
${coins10} moneda(s) de 10 
${coins5} moneda(s) de 5
${coins2} moneda(s) de 2
${amount} moneda(s) de 1`);
