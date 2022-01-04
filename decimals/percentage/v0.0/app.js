const { Console } = require("./console");

const console = new Console();
let percentage = console.readInt("Dame el tanto por ciento (sin %): ") 
console.writeln(percentage + "% = " 
  + percentage + " · 1 / 100 = "  
  + percentage + " · 0,01 = "  
  + (percentage/100))
let amount = console.readInt("Dame la cantidad: ")
let result = amount * percentage / 100
console.writeln(percentage + "%  · " + amount + " = " + result)
