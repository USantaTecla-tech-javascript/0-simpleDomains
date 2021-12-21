let amount = +prompt("Dame la cantidad de céntimos: ");

let remainder50 = amount;
let remainder20 = remainder50 % 50;
let remainder10 = remainder20 % 20;
let remainder5 = remainder10 % 10;
let remainder2 = remainder5 % 5;
const remainder1 = remainder2 % 2;

remainder50 -= remainder20;
remainder20 -= remainder10;
remainder10 -= remainder5;
remainder5 -= remainder2;
remainder2 -= remainder1;

const coins50 = remainder50 / 50;
const coins20 = remainder20 / 20;
const coins10 = remainder10 / 10;
const coins5 = remainder5 / 5;
const coins2 = remainder2 / 2;

const COINS_OF = " moneda(s) de ";
let msg = "El cambio de " + amount + " es:\n";
msg += coins50 > 0 ? coins50 + COINS_OF + 50 + "\n" : "";
msg += coins20 > 0 ? coins20 + COINS_OF + 20 + "\n" : "";
msg += coins10 > 0 ? coins10 + COINS_OF + 10 + "\n" : "";
msg += coins5 > 0 ? coins5  + COINS_OF + 5 + "\n" : "";
msg += coins2 > 0 ? coins2 + COINS_OF + 2 + "\n" : "";
msg += remainder1 > 0 ? remainder1 + COINS_OF + 1 : "";
console.log(msg);

