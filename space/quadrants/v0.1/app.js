const { Console } = require("./console");

const console = new Console();
let x = +console.readInt("Dame la abcisa, x = ");
let y = +console.readInt("Dame la ordenada, y = ");

let quadrant;
if (row != 0 && column != 0) {
  quadrant = 1;
  if (column < 0) {
    quadrant += 2;
  }
  if (row > 0 && column < 0 || row < 0 && column > 0) {
    quadrant++;
  }
}
let msg = "La coordenada (" + row + ", " + column + ")";
if (quadrant == undefined) {
  msg += " NO está en ningún"
} else {
  msg += " está en el " + quadrant + "º";
}
msg += " cuadrante.";
console.writeln(msg);



