let amount = +prompt("Dame la cantidad de céntimos: ");

const amount50 = amount - amount % 50;
amount -=  amount50;
const coin50 = amount50 / 50;
let msg = coin50 > 0 ? coin50 + " moneda(s) de 50\n" : "";

const amount20 = amount - amount % 20;
amount -=  amount20;
const coin20 = amount20 / 20;
msg += coin20 > 0 ? coin20 + " moneda(s) de 20\n" : "";

const amount10 = amount - amount % 10;
amount -= amount10;
const coin10 = amount10 / 10;
msg +=  coin10 > 0 ? coin10 + " moneda(s) de 10\n" : "";

const amount5 = amount - amount % 5;
amount -= amount5;
let coin5 = amount5 / 5;
msg +=  coin5 > 0 ? coin5 + " moneda(s) de 5\n" : "";

let amount2 = amount - amount % 2;
amount -= amount2;
let coin2 = amount2 / 2;
msg +=  coin2 > 0 ? coin2 + " moneda(s) de 2\n" : "";

msg += amount > 0 ? amount + " moneda(s) de 1\n" : "";
console.log(msg);
