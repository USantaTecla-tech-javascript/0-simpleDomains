const { Console } = require("./console");

const console = new Console();
let side = console.readInt("Dame el lado del cuadrado: ")
alert("Perímetro: " + (side * 4) + "\n"
  + "Area: " + (side ** 2))
