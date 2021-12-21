let percentage = prompt("Dame el tanto por ciento (sin %): ") 
console.log(percentage + "% = " 
  + percentage + " · 1 / 100 = "  
  + percentage + " · 0,01 = "  
  + (percentage/100))
let amount = prompt("Dame la cantidad: ")
let result = amount * percentage / 100
console.log(percentage + "%  · " + amount + " = " + result)
