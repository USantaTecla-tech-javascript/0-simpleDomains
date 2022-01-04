let number = +prompt("Dame un número entero");
let DIGITS = ["Unidades", "Decenas", "Centenas"];
for(let i=0; i<DIGITS.length; i++){
  console.log(DIGITS[i] + ":" + (number % 10) + "\n");
  number /= number;
}
