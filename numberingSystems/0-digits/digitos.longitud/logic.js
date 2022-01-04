function getLength(number){
  let digits = 0;
  while (number > 0){
    number = parseInt(number/10);
    digits++;
  }
  return digits;
}

let number = +prompt("Dame un número entero");
console.log("El número " + number + " tiene " + getLength(number) + " digits");
