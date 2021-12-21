let amount = +prompt("Dame la cantidad de céntimos: ");

const amount50 = amount - amount % 50;
amount = amount - amount50;
const coin50 = amount50 / 50;
const msg50 = coin50 > 0 ? coin50 + " moneda(s) de 50\n" : "";

const amount20 = amount - amount % 20;
amount = amount - amount20;
const coin20 = amount20 / 20;
const msg20 =  coin20 > 0 ? coin20 + " moneda(s) de 20\n" : "";

const amount10 = amount - amount % 10;
amount = amount - amount10;
const coin10 = amount10 / 10;
const msg10 = coin10 > 0 ? coin10 + " moneda(s) de 10\n" : "";

const amount5 = amount - amount % 5;
amount = amount - amount5;
const coin5 = amount5 / 5;
const msg5 = coin5 > 0 ? coin5 + " moneda(s) de 5\n" : "";

const amount2 = amount - amount % 2;
amount = amount - amount2;
const coin2 = amount2 / 2;
const msg2 = coin2 > 0 ? coin2 + " moneda(s) de 2\n" : "";

const msg1 = amount > 0 ? amount + " moneda(s) de 1\n" : "";
console.log(msg50 + msg20 + msg10 + msg5 + msg2 + msg1);
