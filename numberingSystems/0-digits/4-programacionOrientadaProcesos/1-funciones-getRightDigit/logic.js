function getRightDigit(number, position){
  for(let i=0; i<position-1; i++){
    number = parseInt(number/10);
  }
  return number%10;
}

let number = +prompt("Dame un número entero");

let DIGITS = ["Unidades", "Decenas", "Centenas"];
for(let i=0; i<DIGITS.length; i++){
  console.log(DIGITS[i] + ":" + getRightDigit(number, i+1) + "\n");
}
