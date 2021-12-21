let amount = +prompt("Dame la cantidad de céntimos: ");

let remainder50 = amount;
let remainder20 = remainder50 % 50;
let remainder10 = remainder20 % 20;
let remainder5 = remainder10 % 10;
let remainder2 = remainder5 % 5;
let remainder1 = remainder2 % 2;

remainder50 = remainder50 - remainder20;
remainder20 = remainder20 - remainder10;
remainder10 = remainder10 - remainder5;
remainder5 = remainder5 - remainder2;
remainder2 = remainder2 - remainder1;

let coins50 = remainder50 / 50;
let coins20 = remainder20 / 20;
let coins10 = remainder10 / 10;
let coins5 = remainder5 / 5;
let coins2 = remainder2 / 2;

console.log("El cambio de " + amount + " es:\n"
  + coins50 + " moneda(s) de 50\n" 
  + coins20 + " moneda(s) de 20\n" 
  + coins10 + " moneda(s) de 10\n" 
  + coins5 + " moneda(s) de 5\n" 
  + coins2 + " moneda(s) de 2\n" 
  + remainder1 + " moneda(s) de 1");
