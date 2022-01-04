let amount = +prompt("Dame una cantidad de elementos: ");
console.log("La cantidad " + amount + " tiene " 
  + (amount - amount % 1) + " como parte entera " 
  + (amount % 1) + " como parte decimal.");
