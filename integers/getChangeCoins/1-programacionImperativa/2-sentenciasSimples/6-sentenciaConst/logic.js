let amount = +prompt("Dame la cantidad de céntimos: ");
const amount50 = amount - amount % 50;
amount = amount - amount50;

const coin50 = amount50 / 50;
const amount20 = amount - amount % 20;
amount = amount - amount20;

const coin20 = amount20 / 20;
const amount10 = amount - amount % 10;
amount = amount - amount10;

const coin10 = amount10 / 10;
const amount5 = amount - amount % 5;
amount = amount - amount5;

const coin5 = amount5 / 5;
const amount2 = amount - amount % 2;
amount = amount - amount2;

const coin2 = amount2 / 2;
console.log(coin50 + " moneda(s) de 50\n" 
  + coin20 + " moneda(s) de 20\n" 
  + coin10 + " moneda(s) de 10\n" 
  + coin5 + " moneda(s) de 5\n" 
  + coin2 + " moneda(s) de 2\n" 
  + amount + " moneda(s) de 1");
