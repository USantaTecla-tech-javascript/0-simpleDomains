let amount = +prompt("Dame la cantidad de céntimos: ");
let amount50 = amount - amount % 50;
amount = amount - amount50;

let coin50 = amount50 / 50;
let amount20 = amount - amount % 20;
amount = amount - amount20;

let coin20 = amount20 / 20;
let amount10 = amount - amount % 10;
amount = amount - amount10;

let coin10 = amount10 / 10;
let amount5 = amount - amount % 5;
amount = amount - amount5;

let coin5 = amount5 / 5;
let amount2 = amount - amount % 2;
amount = amount - amount2;

let coin2 = amount2 / 2;
console.log(coin50 + " moneda(s) de 50\n" 
  + coin20 + " moneda(s) de 20\n" 
  + coin10 + " moneda(s) de 10\n" 
  + coin5 + " moneda(s) de 5\n" 
  + coin2 + " moneda(s) de 2\n" 
  + amount + " moneda(s) de 1");
