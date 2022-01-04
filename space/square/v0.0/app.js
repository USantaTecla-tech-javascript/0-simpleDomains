const { Console } = require("./console");

const console = new Console();
let side = +console.readInt("Dame el lado del cuadrado: ");
let perimeter = side * 4;
let area = side ** 2;
alert("Perímetro: " + perimeter + "\n"
  + "Area: " + area);
