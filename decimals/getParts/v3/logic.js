function getIntegerDivision(amount) {
  return amount - getRemainderDivision(amount);
}

function getRemainderDivision(amount){
  return amount % 1;
}

let amount = +prompt("Dame una cantidad de elementos: ");
console.log("La cantidad " + amount + " tiene " 
  + getIntegerDivision(amount) + " como parte entera " 
  + getRemainderDivision(amount) + " como parte decimal.");