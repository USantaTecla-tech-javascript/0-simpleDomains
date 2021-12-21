let dividend = +prompt("Dame el dividendo: ");
let divider = +prompt("Dame el divisor: ");
let remainder = dividend % divider;
let integer = dividend - remainder;
let quotient = integer / divider;
console.log(dividend + " / " + divider + " = " + quotient + " y sobran " + remainder);
